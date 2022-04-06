package com.atos.newhire.backend.dao;

import com.atos.newhire.backend.model.Person;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface PersonDao {

    int insertPerson(UUID id, Person person) throws IOException;

    default int insertPerson(Person person) throws IOException {
        UUID id = UUID.randomUUID();
        return insertPerson(id, person);
    }

    List<Person> getAllPeople();

    ResponseEntity<StreamingResponseBody> getForms(String filename, boolean empty) throws IOException;

    Person getCurrentPerson();
}
