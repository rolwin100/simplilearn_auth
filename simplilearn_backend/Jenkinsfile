pipeline {
    agent {
        dockerfile {
        	filename 'Dockerfile.jenkins'
        }
    } 
  
    stages {    
        stage('SonarQube analysis') {
            steps {
				withSonarQubeEnv('SonarQube') {
					sh "sonar-scanner"
				}
            }
        }

        stage("Quality Gate"){
            steps {
                script {
                  timeout(time: 1, unit: 'HOURS') { // Just in case something goes wrong, pipeline will be killed after a timeout
                    def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
                    if (qg.status != 'OK') {
                      error "Pipeline aborted due to quality gate failure: ${qg.status}"
                    }
                  }
                }
            }
        }

        stage('Prepare') {
          steps {
            sh "yarn install --no-progress --silent"
          }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh "yarn build"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
            }
        }
    }

    post { 
        cleanup { cleanWs() } 
        failure {
            emailext to: "robin.s", subject: '${DEFAULT_SUBJECT}', body: '${DEFAULT_CONTENT}'
        }
    }
}