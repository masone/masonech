task :default => 'build_and_deploy'

desc 'Deploys the build to gh-pages'
task :deploy do
  puts 'Commit message:'
  message = STDIN.gets.chomp
  puts "Deploying ..."
  `cd build; echo 'cfelder.com' > CNAME; git add .; git commit -am '#{message}'; git push`
  `git add .; git commit -am '#{message}'; git push`
end

desc 'Builds the html'
task :build do
  puts "Building ..."
  `middleman build`
end

desc 'Builds and deploys'
task :build_and_deploy => [:build, :deploy] do
end