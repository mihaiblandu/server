pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('System') {
      steps {
        sh 'ls -la'
        sh 'pwd'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
  triggers {
    pollSCM('* * * * *')
  }
}