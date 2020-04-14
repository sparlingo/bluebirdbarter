import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const Dropzone = ({ isDropDisabled, player, id }) => (
  <footer>
    <div className="column col-11">
      <div className="divider" data-content={id.toUpperCase()} />
      <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
        {provided => {
          return (
            <div className="menu player-list" {...provided.droppableProps} ref={provided.innerRef}>
              {players.map(({ name }, index) => (
                <Player key={name} name={name} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </div>
  </footer>
)

const Player = ({ name, index }) => (
  <Draggable key={name} draggableId={name} index={index}>
    {provided => {
      return (
        <div
          className="menu-item tile tile-centered"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <figure style={{ backgroundColor: 'transparent' }} className="avatar tile-icon">
            <img src={`./player_icons/${name.toLowerCase().replace(' ', '-')}.svg`} alt={name} />
          </figure>
          <div className="tile-content">{name}</div>
        </div>
      )
    }}
  </Draggable>
)
  
export default Dropzone