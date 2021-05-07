import {reactLocalStorage} from 'reactjs-localstorage';

export const findAllJournals = () => {
  const journals = reactLocalStorage.getObject('journals');
  if(journals.length) {
    return journals;
  } else {
    reactLocalStorage.setObject('journals', []);
  }
  return [];
}

export const createJournal = () => {
  let journals = findAllJournals();
  const newJournal = {
    name: 'New Journal',
    id: (new Date()).getTime(),
  }
  journals.push(newJournal);
  reactLocalStorage.setObject('journals', journals);
  return journals;
}

export const deleteJournal = (journalToDelete) => {
  let journals = findAllJournals();
  journals = journals.filter((journal) => {
    return journal.id !== journalToDelete.id;
  })
  reactLocalStorage.setObject('journals', journals);
  return journals;
}

const api = {
  findAllJournals,
  createJournal,
  deleteJournal,
};

export default api;