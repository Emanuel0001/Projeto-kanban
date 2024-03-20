import './style.css'
import MinhaLogo from '../assets/logo-light.svg'
import Modal from 'react-modal';
import React from 'react';
import { useState } from 'react';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: "#2B2C37",
    transform: 'translate(-50%, -50%)',
  },
};

const Dashboard = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = useState('');
    const [descricao, setDescricao] = useState('');
    const [subtasks, setSubtasks] = useState([]);
    const [subtask, setSubtask] = useState('');
  
    const handleSubtaskChange = (e) => {
      setSubtask(e.target.value);
    };
  
    const handleAddSubtask = () => {
      if (subtask.trim() !== '') {
        setSubtasks([...subtasks, subtask]);
        setSubtask('');
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Aqui você pode enviar os dados do formulário para onde quiser, como uma API, por exemplo.
      console.log('Dados do formulário:', { title, descricao, subtasks });
    };
    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <div class="container">
    <div class="menu">
        <img className="logo" src={MinhaLogo} alt='logo'/>
      <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
      </ul>
    </div>
    <div className="dashboard">
      <div className="header">
        <h1>Platform Launch</h1>
        <button>+ Add New Task</button>
      </div>
      <div className="content">
        <button className="add-column" onClick={openModal}>+ Add New Column</button>
        
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>add new column</h2>
        <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title">Board Name:</label>
        <input type="text" id="title" placeholder='e.g. Web Design' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
      <label htmlFor="title">Board Columns:</label>
      <button className="add-column-modal" onClick={openModal}>Create New Column</button>

      </div>
      <div>
        <button className="add-board-modal" onClick={openModal}>Create New Board</button>
      </div>
    </form>
       
      </Modal>
      </div>
    </div>
  </div>
    )
}


export default Dashboard;