import { Droppable, Draggable } from "@hello-pangea/dnd";
import Card from "./Card";

export default function PlayerMeldGroup({ group, gIndex }) {
  return (
    <div style={{
      marginBottom: 10,
      padding: 10,
      border: "2px dashed gold",
      borderRadius: 10,
      background: "rgba(255,255,255,0.08)"
    }}>
      <h4 style={{ color: "white" }}>Group {gIndex + 1}</h4>

      <Droppable droppableId={`meld-${gIndex}`} direction="horizontal">
        {provided => (
          <div
            ref={provided.innerRef}
            style={{ display: "flex", gap: 8, minHeight: 80 }}
            {...provided.droppableProps}
          >
            {group.map((card, index) => (
              <Draggable draggableId={card.id} index={index} key={card.id}>
                {provided2 => (
                  <div
                    ref={provided2.innerRef}
                    {...provided2.draggableProps}
                    {...provided2.dragHandleProps}
                  >
                    <Card card={card} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
