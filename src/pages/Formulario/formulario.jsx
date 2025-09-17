import '../Formulario/style1.css'

function Formulario() {
    return (

        <div className="app-container">
            <div className="main-content">
                Formulario
            </div>

            <form>
                <div className='form-group'>
                    <label for="text">Texto:</label>
                    <input type="text" id="text" name="text" placeholder="Digite seu Nome:" required />
                </div>
                <div className='form-group'>
                    <label for="text">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua Senha:" required />
                </div>
                <div className='form-group'>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu Email:" />
                </div>
                <div className='form-group'>
                    <label for="email">Numero:</label>
                    <input type="number" id="number" name="number" placeholder="Digite seu Numero:" required />
                </div>
                <div className='form-group'>
                    <label for="tel">Telefone:</label>
                    <input type="tel" id="tel" name="tel" />
                </div>
                <div className='form-group'>
                    <label for="url">URl:</label>
                    <input type="url" id="url" name="tel" />
                </div>
                <div className='form-group'>
                    <label for="search">Pesquisar:</label>
                    <input type="search" id="search" name="search" />
                </div>
                <div className='form-group'>
                    <label for="date">Data:</label>
                    <input type="date" id="date" name="date" />
                </div>
                <div className='form-group'>
                    <label for="time">Tempo:</label>
                    <input type="time" id="time" name="time" />
                </div>
                <div className='form-group'>
                    <label for="datetime-local">Data e Hora:</label>
                    <input type="datetime-local" id="datetime-local" name="datetime-local" />
                </div>
                <div className='form-group'>
                    <label for="month">Mês:</label>
                    <input type="month" id="month" name="month" />
                </div>
                <div className='form-group'>
                    <label for="week">Semana:</label>
                    <input type="week" id="week" name="week" />
                </div>
                <div className='form-group'>
                    <label for="file">Arquivo:</label>
                    <input type="file" id="file" name="file" />
                </div>
                <div className='form-group'>
                    <label for="checkbox">Checkbox:</label>
                    <input type="checkbox" id="checkbox" name="checkbox" />Opção 1 <br />
                    <input type="checkbox" id="checkbox" name="checkbox" />Opção 2 <br />
                    <input type="checkbox" id="checkbox" name="checkbox" />Opção 3 <br />
                    <input type="checkbox" id="checkbox" name="checkbox" />Opção 4 <br />
                </div>
                <div className='form-group'>
                    <label for="time">Masculino:</label>
                    <input type="radio" id="radio1" name="radio" />Masculino: <br />
                    <label for="time">Feminino:</label>
                    <input type="radio" id="radio1" name="radio" />Feminino: <br />
                </div>
                <div className="form-group">
                    <label for="select">Select:</label>
                    <select name="select" id="select">
                        <option value="RJ">RJ</option>
                        <option value="SP">SP</option>
                        <option value="MG">MG</option>
                        <option value="BA">BA</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label for="textarea">Textarea:</label>
                    <textarea name="textarea" id="textarea"></textarea>
                </div>


                <div className='form-group'>
                    <button type="submit">Enviar</button>
                </div>

            </form>

        </div>
    );
}
export default Formulario;