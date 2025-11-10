node{
    def appDir='/var/www/nextjs-app'

    stage('Clean workspace'){
        echo 'Cleaning workspace...'
        deleteDir()
    }

    stage('clone repository'){
        echo 'Cloning repository...'
        git(
            branch: 'main',
            url: 'https://github.com/Samir-github2005/AWS-CI-CD-EC2-AUTO-DEPLOY'
        )
        stage('delpoying ec2'){
            echo 'Deploying to EC2 instance...'
            sh """
                sudo mkdir -p ${appDir}
                sudo chown -R jenkins:jenkins ${appDir}
                rsync -av --delete --exclude='.git/ ./node_modules/' ./ ${appDir}/
                cd ${appDir}
                sudo npm install
                sudo npm run build
                sudo fuser -k 3000/tcp || true
                npm run start
                """  

        }
    }
}