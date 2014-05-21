Set up an instance of Gollum on my local machine that I can use as a wiki to take random notes in.  I tried this once before when I was doing a lot of PHP stuff and it was unsuccessful, but I still think it is a good idea if I can actually follow through with it.

In any event, Gollum doesn't install on windows, so I had to spin up a vm.  Once the vm was up and the port shared, it all seemed good.  However, I had to configure the vagrant box in the following manner:

`
sudo apt-get update\n
sudo apt-get install -y curl
\curl -L https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
rvm requirements
rvm install ruby-1.9.3-full
rvm rubygems current
sudo apt-get install -y git-core
sudo apt-get install -y libicu-dev
sudo gem install gollum
sudo gem install redcarpet
git clone https://github.com/mlybrand/personalwiki.git
`