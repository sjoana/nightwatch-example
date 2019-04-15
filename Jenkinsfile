pipeline {
    agent any
	stages {
		stage('Stage Checkout') {
            steps {
                git branch: 'master',
                credentialsId: '597b8c67-fa46-4fe2-8126-55e9d74e3996',
                url: 'https://github.com/sjoana/nightwatch-example/'

            sh "ls -lat"
            }
		}
		stage('Build') {
            steps {
                echo 'Building..'
			    sh 'sudo npm install --unsafe-perm'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'node nightwatch.js -t tests/google.js'

            }
        }
    }
}