source "https://rubygems.org"

gem "jekyll", "~> 4.0.0"

gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem 'jekyll-feed'
  gem "jekyll-last-modified-at"
  gem 'jekyll-seo-tag'

end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

gem "jekyll-last-modified-at"
