import React from 'react';
import './ModalCheck.css'
import { useNavigate } from 'react-router-dom';
export function ModalCheck() {

    const navigate = useNavigate();

    const closeModal = () => {
        navigate('/');
    }
  return (
    <div>

        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Yeahh, your ticket has been booked</h3>
              <button className="close-button" onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
