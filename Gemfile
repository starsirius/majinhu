source 'https://rubygems.org'

ruby '2.4.1'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'haml-rails'

gem 'pg'
gem 'puma'
gem 'rails'
gem 'sass-rails'
gem 'uglifier'
gem 'webpacker'
# gem 'therubyracer', platforms: :ruby

gem 'jbuilder'
gem 'turbolinks'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'rspec-rails'
  gem 'rubocop', require: false
end

group :development do
  gem 'listen'
  gem 'spring'
  gem 'spring-watcher-listen'
  gem 'web-console'
end

group :test do
  gem 'database_cleaner'
  gem 'rails-controller-testing'
  gem 'rspec_junit_formatter'
end
