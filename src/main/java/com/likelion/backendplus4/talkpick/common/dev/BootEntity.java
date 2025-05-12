package com.likelion.backendplus4.talkpick.common.dev;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.likelion.backendplus4.talkpick.common.jpa.TestEntity;
import com.likelion.backendplus4.talkpick.common.jpa.TestRepository;

import lombok.RequiredArgsConstructor;

@SpringBootApplication
@EntityScan("com.likelion.backendplus4.talkpick.common.jpa")
@EnableJpaRepositories("com.likelion.backendplus4.talkpick.common.jpa")
@RequiredArgsConstructor
public class BootEntity implements CommandLineRunner {

	private final TestRepository repo;

	public static void main(String[] args) {
		SpringApplication.run(BootEntity.class, args);
	}

	@Override
	public void run(String... args) {
		TestEntity entity = new TestEntity();
		entity.setValue("런타임 저장 테스트");
		TestEntity saved = repo.save(entity);
		System.out.println("저장된 엔티티 ID: " + saved.getId());
		// 필요시 System.exit(0);
	}
}