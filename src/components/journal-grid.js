import React, {useState, useEffect} from 'react';
import journalService from '../services/journal-service-local';

export const JournalGrid = () => {
  const [journals, setJournals] = useState([]);
  useEffect(() => {
    const journals = journalService.findAllJournals();
    setJournals(journals);
  }, []);
  const createJournal = () => {
    const journals = journalService.createJournal();
    setJournals(journals);
  }
  const deleteJournal = (journal) => {
    const journals = journalService.deleteJournal(journal);
    setJournals(journals);
  }
  return(
    <div>
      <h1>Journal Grid</h1>
      <ul className="list-group">
        {
          journals && journals.map((journal) => {
            return(
              <li key={journal.id} className="list-group-item">
                {journal.name}
                <button
                  onClick={() => {
                    deleteJournal(journal);
                  }}
                  className="btn btn-danger float-end">
                  Delete
                </button>
              </li>
            )
          })
        }
      </ul>
      <button
        onClick={createJournal}
        className="btn btn-primary">
        Create
      </button>
    </div>
  );
}