import "./message-bar.scss";

interface MessageBarProps {
  input: string;
  setInput: (text: string) => void;
  sendMessage: (e: React.FormEvent) => void;
}

export default function MessageBar({ input, setInput, sendMessage }: MessageBarProps) {
  return (
    <form className="chat__form" onSubmit={sendMessage}>
      <input
        type="text"
        className="chat__input"
        placeholder="Digite uma mensagem"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit" className="chat__button">
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
}
