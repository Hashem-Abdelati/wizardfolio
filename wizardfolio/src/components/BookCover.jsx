export default function BookCover({ onOpen }) {
    return (
      <div className="book-wrapper">
        <div
          className="book-cover"
          onClick={onOpen}
        >
          <h1 className="text-5xl font-cinzel font-bold mb-4">Wizardfolio</h1>
          <p className="text-lg font-serif">Click to open the enchanted portfolio of Hashem</p>
        </div>
      </div>
    );
  }
  