pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh 'npm install'
          }
        }

        stage('System') {
          steps {
            sh 'ls -la'
            sh 'pwd'
          }
        }

      }
    }

  }
  triggers {
    pollSCM('* * * * *')
  }
}