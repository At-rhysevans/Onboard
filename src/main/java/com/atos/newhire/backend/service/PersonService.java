package com.atos.newhire.backend.service;

import com.atos.newhire.backend.dao.PersonDao;
import com.atos.newhire.backend.model.Person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.IOException;
import java.util.List;

@Service
public class PersonService {

    private final PersonDao personDao;

    @Autowired
    public PersonService(@Qualifier("initDao") PersonDao personDao) {
        this.personDao = personDao;
    }

    public int addPerson(Person person) throws IOException {
        return personDao.insertPerson(person);
    }

    public List<Person> getAllPeople() {
        return personDao.getAllPeople();
    }

    public Person getCurrentPerson() {
        return personDao.getCurrentPerson();
    }

    public ResponseEntity<StreamingResponseBody> getForms(String filename, boolean empty) throws IOException {
        return personDao.getForms(filename, empty);
    }
}
