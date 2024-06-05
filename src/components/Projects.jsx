import github from '../assets/github_icon.png'
import logo from '../assets/imagen_1.jpg'
import live from '../assets/live.png'

export function Project() {
  return (
    <>
      <section className="container-projects">
        <h1>Proyectos</h1>
        <div className="container-projects--card">
          <div className="container-projects--card__content-card">
            <div className="container-projects--card__content-card__header">
              <img src={logo} alt="nueva imgen" width={300} />
            </div>
            <div className="container-projects--card__content-card__body">
              <h3>Recipes App</h3>
            </div>
            <div className="overlay">
              <button>
                <img src={github} alt="" width={23} /> Código
              </button>
              <button>
                {' '}
                <img src={live} alt="" width={23} /> Vivo
              </button>
            </div>
          </div>
          <div className="container-projects--card__content-card">
            <div className="container-projects--card__content-card__header">
              <img src={logo} alt="nueva imgen" width={300} />
            </div>
            <div className="container-projects--card__content-card__body">
              <h3>Titulo proyecto</h3>
            </div>
            <div className="overlay">
              <button>Button 1</button>
              <button>Codigo</button>
            </div>
          </div>
          <div className="container-projects--card__content-card">
            <div className="container-projects--card__content-card__header">
              <img src={logo} alt="nueva imgen" width={300} />
            </div>
            <div className="container-projects--card__content-card__body">
              <h3>Titulo proyecto</h3>
            </div>
            <div className="overlay">
              <button>Button 1</button>
              <button>Codigo</button>
            </div>
          </div>
          <div className="container-projects--card__content-card">
            <div className="container-projects--card__content-card__header">
              <img src={logo} alt="nueva imgen" width={300} />
            </div>
            <div className="container-projects--card__content-card__body">
              <h3>Titulo proyecto</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
