import "./chat-card.css";

export default function ChatCard() {
  return (
    <section className="chat">
      <section className="chat__messages"></section>

      <form className="chat__form">
        <input
          type="text"
          className="chat__input"
          placeholder="Digite uma mensagem"
          required
        />
        <button type="submit" className="chat__button">
          <span className="material-symbols-outlined">send</span>
        </button>
      </form>
    </section>
  );
}
