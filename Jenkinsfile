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
        sh 'pwd'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'echo test'
      }
    }

  }
  triggers {
    pollSCM('* * * * *')
  }
}