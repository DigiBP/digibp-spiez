package ch.fhnw.digibp;

import org.camunda.bpm.spring.boot.starter.annotation.EnableProcessApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableProcessApplication
public class ProcessApplication {

	public static void main(String[] args) {

	
				for (String deploymentId : repositoryService.createDeploymentQuery().withoutTenantId().list()) {
					repositoryService.deleteDeployment(deploymentId, true);
				}
			

		SpringApplication.run(ProcessApplication.class, args);
	}

}