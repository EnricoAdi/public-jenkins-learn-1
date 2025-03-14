pipeline {
  agent any
  stages {
    stage('Hello') {
      steps {
        echo ('Hello world')
      }
    } 
  }
  post{
    always {
      echo 'I will always say hello'
    }
    succcess {
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