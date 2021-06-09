import Card from './components/Card';
import recipes from './data';
import './styles/cardContainer.scss';

function App() {
  return (
    <div className="card__container">
      {recipes.map(recipe => {
        return <Card key={recipe.id} {...recipe}></Card>;
      })}
    </div>
  );
}

export default App;
