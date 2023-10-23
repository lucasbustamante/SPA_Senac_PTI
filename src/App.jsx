import './App.css'
import CardProduto from './components/CardProduto'
import Header from './components/Header'
import Titulo from './components/Titulo'
import Footer from './components/Footer'

function App() {
  const dishes01 = {
    nome: 'Beef Burguer',
    descricao: 'Lorem ipsum dolor sit amet.',
    valor: '12.00',
    img: 'https://png.pngtree.com/png-clipart/20210606/original/pngtree-brunch-lunch-dinner-food-dish-top-view-png-image_6387953.jpg',
  };
  const dishes02 = {
    nome: 'Pancakes',
    descricao: 'Sed ut perspiciatis unde omnis iste.',
    valor: '25.00',
    img: 'https://img.freepik.com/fotos-premium/pizza-isolada-em-fundo-branco-ia-generativa_74760-2619.jpg',
  };
  const dishes03 = {
    nome: 'French Fries',
    descricao: 'Lorem ipsum dolor sit amet.',
    valor: '10.00',
    img: 'https://img.freepik.com/fotos-premium/delicioso-hamburguer-em-um-prato-isolado-no-fundo-branco_899451-16.jpg',
  };
  const dishes04 = {
    nome: 'French Fries',
    descricao: 'Sed ut perspiciatis unde omnis iste.',
    valor: '47.00',
    img: 'https://img.freepik.com/fotos-premium/macarrao-com-tomate-e-manjericao-e-isolado-em-um-fundo-branco_166116-5594.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=ais',
  };
  const dishes05 = {
    nome: 'French Fries',
    descricao: 'Lorem ipsum dolor sit amet.',
    valor: '10.00',
    img: 'https://pngimg.com/d/sushi_PNG98839.png',
  };
  const dishes06 = {
    nome: 'French Fries',
    descricao: 'Sed ut perspiciatis unde omnis iste.',
    valor: '10.00',
    img: 'https://media.istockphoto.com/id/1140441708/photo/windows.jpg?s=612x612&w=0&k=20&c=jnRoYsB8YoZi-LyszsLEB-ZEPG3JToDN1AnYtBux_JI=',
  };
  const dishes07 = {
    nome: 'French Fries',
    descricao: 'Lorem ipsum dolor sit amet.',
    valor: '10.00',
    img: 'https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA=',
  };
  const dishes08 = {
    nome: 'French Fries',
    descricao: 'Lorem ipsum dolor sit amet.',
    valor: '10.00',
    img: 'https://static.vecteezy.com/system/resources/previews/010/262/699/original/new-york-style-cheesecake-top-view-isolated-on-transparent-background-for-design-purpose-free-png.png',
  };
  const dishes09 = {
    nome: 'French Fries',
    descricao: 'Sed ut perspiciatis unde omnis iste unde omnis iste',
    valor: '37.49',
    img: 'https://img.freepik.com/premium-photo/top-view-round-baked-chocolate-cake_711700-1806.jpg',
  };
  const dishes10 = {
    nome: 'French Fries',
    descricao: 'Sed ut perspiciatis unde omnis iste.',
    valor: '11.30',
    img: 'https://freepngimg.com/save/139180-food-plate-fish-download-hd/792x797',
  };
  const dishes11 = {
    nome: 'French Fries',
    descricao: 'Sed ut perspiciatis unde omnis iste.',
    valor: '23.00',
    img: 'https://png.pngtree.com/png-clipart/20220927/original/pngtree-vegetable-salad-salad-healthy-eating-png-image_8636211.png',
  };
  const dishes12 = {
    nome: 'French Fries',
    descricao: 'Sed ut perspiciatis unde omnis iste.',
    valor: '19.00',
    img: 'https://media.istockphoto.com/id/1006150826/pt/foto/belgian-waffle-with-berries.jpg?s=612x612&w=0&k=20&c=764bZKgHEUfEbFJoDzEGkTw3jJRVmor4YTXN98ZJwn0=',
  };
  
  return (
    <div className="App">
      <Header />
      <Titulo />
      <section>
        <section className='container'>
          <CardProduto dishes={dishes01} />
          <CardProduto dishes={dishes02} />
          <CardProduto dishes={dishes03} />
          <CardProduto dishes={dishes04} />
          <CardProduto dishes={dishes05} />
          <CardProduto dishes={dishes06} />
          <CardProduto dishes={dishes07} />
          <CardProduto dishes={dishes08} />
          <CardProduto dishes={dishes09} />
          <CardProduto dishes={dishes10} />
          <CardProduto dishes={dishes11} />
          <CardProduto dishes={dishes12} />
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App