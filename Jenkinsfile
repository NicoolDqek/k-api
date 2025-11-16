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

        stage('Install Backend Dependencies') {
            steps {
                sh 'cd backend && npm install'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                sh 'cd frontend && npm install'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        failure {
            echo 'El pipeline falló. Revisar logs.'
        }
        success {
            echo 'Pipeline ejecutado correctamente.'
        }
    }
}
