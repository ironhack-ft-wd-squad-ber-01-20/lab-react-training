// componente funcional
const deadCat = props => {
  //pillamos el props por props
  //no podemos hacer un state
  //no hace falta render pero haces el javascript que te mola
  //aqui solamente ponemos un return
  handleClick = () => {};
  return <></>;
};

class aliveCat extends React.Component {
  //accedemos a las propiedades conthis.props
  // aqui podemos crear un state
  state = {
    algo: "algo<"
  };
  handleClick = () => {};
  //aqui es importante poner el render()
  render() {
    // hacemos el javascript que te apetezca
    //aqui siempre pondremos el return
    return <div>{}</div>;
  }
}
