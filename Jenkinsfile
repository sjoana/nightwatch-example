pipeline {
    agent any
	stages {
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