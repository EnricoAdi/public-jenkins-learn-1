pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo ('Hello build!')
      }
    } 
    stage('Test') {
      steps {
        // echo ('Hello test begin')
        sh('error')
      }
    } 
    stage('Deploy') {
      steps {
        echo ('Hello Deployed!')
      }
    } 
  }
  post{
    always {
      echo 'I will always say hello'
    }
    success {
      echo 'I will only say hello on success'
    }
    failure {
      echo 'I will only say hello on failure'
    }
    cleanup {
      echo 'Dont care success or error'
    }
  }
}