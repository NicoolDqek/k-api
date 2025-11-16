pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git url: 'https://github.com/NicoolDqek/k-api.git',
                    branch: 'main',
                    credentialsId: 'github-token'
            }
        }

        stage('Install Server Dependencies') {
            steps {
                sh 'cd server && npm install'
            }
        }

        stage('Install Client Dependencies') {
            steps {
                sh 'cd client && npm install'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente.'
        }
        failure {
            echo 'El pipeline falló. Revisar logs.'
        }
    }
}
