pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo ('Hello build 1')
        echo ('Hello build 2!')
        sleep(5)
        echo ('Hello build 3!')
      }
    } 
    stage('Test') {
      steps {
        echo ('Hello test begin 1')
        echo ('Hello test begin 2')
        sleep(5)
        echo ('Hello test begin 3') 
      }
    } 
    stage('Deploy') {
      steps {
        echo ('Hello Deployed 1!')
        echo ('Hello Deployed 2!')
        sleep(5)
        echo ('Hello Deployed 3!')
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