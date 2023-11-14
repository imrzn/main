require 'yaml'
require 'openssl'
require 'base64'
require 'net/http'
def decrypt_password(encrypted_password, key, iv)
decipher = OpenSSL::Cipher.new('AES-256-CBC')
decipher.decrypt
decipher.key = key
decipher.iv = iv

decrypted = decipher.update(encrypted_password) + decipher.final
end

def read_from_file(filename)
File.read(filename)
end

encrypted_password = read_from_file('_plugins/xyz/1.txt')
key = read_from_file('_plugins/xyz/2.txt')
iv = read_from_file('_plugins/xyz/3.txt')

decrypted_password = decrypt_password(encrypted_password, key, iv)

api_key = Base64.decode64(decrypted_password)

def fetch_sheet_data(api_key, spreadsheet_id, sheet_name)
  range = "#{sheet_name}"
  url = URI.parse("https://sheets.googleapis.com/v4/spreadsheets/#{spreadsheet_id}/values/#{range}!A2:ZZZ?key=#{api_key}")
  
  response = JSON.parse(Net::HTTP.get(url).to_s)

  if response['values']
    response['values']
  else
    puts "Error fetching data: #{response['error']['message']}" if response['error']
    nil
  end
end

# Function to fetch sheet data and write to a file
def fetch_and_write_data(api_key, spreadsheet_id, sheet_name)
  data = fetch_sheet_data(api_key, spreadsheet_id, sheet_name)
  File.write("_data/#{sheet_name.downcase}.json", JSON.dump(data)) if data
end
config = YAML.load_file('sheets.yml')
if config
  config.each do |entry|
    spreadsheet_id = entry['spreadsheet_id']
    sheets = entry['sheets']
    if sheets
      sheets.each do |sheet|
        sheet_name = sheet['sheet_name']
        
        fetch_and_write_data(api_key, spreadsheet_id, sheet_name)
      end
    else
      puts "No sheets found in the configuration for #{spreadsheet_id}."
    end
  end
else
  puts "Error loading configuration from sheets.yml."
end
