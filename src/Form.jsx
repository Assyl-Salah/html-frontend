import React from 'react';
import './Form.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
//import {  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const style = {
    width: "40%",
    height: "500px",
    position: "fixed",
    marginLeft:"0px",
    marginTop:"75px",
    marginRight:"200px",

backgroundColor:"rgba(50,115,150,0.3)"

};
class Form extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state= {

            od_dnia: null,
            do_dnia: null,
            miejscowość: null,
            ulica: null,
            rodzaj_zdarzenia: null

        };
        this.radiogroup=this.radiogroup.bind(this);
        }
        radiogroup=(e)=>{
            this.setState({od_dnia:e.target.value});
            this.setState({do_dnia:e.target.value});
         }

    onSubmith=(e)=>{
        e.preventDefault();
        this.setState({isSaving:true});
        fetch('http://localhost:3004/accident' ,{
                method :"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "od_dnia": this.state.od_dnia,
                    "do_dnia": this.state.do_dnia,
                    "miejscowość": this.state.miejscowość,
                    "ulica": this.state.ulica,
                    "rodzaj_zdarzenia": this.state.rodzaj_zdarzenia
                })
            }
        )
            .then(Response=>Response.json())
    }

    onChangeEvent(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render()
    {
        return(

            <form  style={style}  onSubmit={this.onSubmith}>

                    <div  onChange={e=>this.radiogroup(e)}>
                        <input type="radio" value="ko" name="t1" /> wypadki i kolizje
                        <br></br>
                        <input type="radio" value="wy" name="t2" /> wypadki
                            <br></br>
                        <input type="radio" value="sm" name="t3" /> wypadki i śmiertelne
                        <br></br>
                    </div>
                            <div>
                                <label>od dnia :</label><input  type="date" name="name"></input>
                                <tr/>

                                <label >do dnia :</label><input  type="date"></input>

                                <br/>
                                <label>Powiat :</label>
                                <select name="powiat">

                                        <option>
                                            POWIAT KALISZ
                                        </option>
                                        <option>
                                            POWIAT KAMIENNOGÓRSKI
                                        </option>
                                        <option>
                                            POWIAT KAMIEŃSKI
                                        </option>
                                        <option>
                                            POWIAT KARTUSKI
                                        </option>
                                        <option>
                                            POWIAT KATOWICE
                                        </option>
                                        <option>
                                            POWIAT KAZIMIERSKI
                                        </option>
                                        <option>
                                            POWIAT KĘDZIERZYŃSKO-KOZIELSKI
                                        </option>
                                        <option>
                                            POWIAT KĘPIŃSKI
                                        </option>
                                        <option>
                                            POWIAT KĘTRZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT KIELCE
                                        </option>
                                        <option>
                                            POWIAT KIELECKI
                                        </option>
                                        <option>
                                            POWIAT KLUCZBORSKI
                                        </option>
                                        <option>
                                            POWIAT KŁOBUCKI
                                        </option>
                                        <option>
                                            POWIAT KŁODZKI
                                        </option>
                                        <option>
                                            POWIAT KOLBUSZOWSKI
                                        </option>
                                        <option>
                                            POWIAT KOLNEŃSKI
                                        </option>
                                        <option>
                                            POWIAT KOLSKI
                                        </option>
                                        <option>
                                            POWIAT KOŁOBRZESKI
                                        </option>
                                        <option>
                                            POWIAT KONECKI
                                        </option>
                                        <option>
                                            POWIAT KONIN
                                        </option>
                                        <option>
                                            POWIAT KONIŃSKI
                                        </option>
                                        <option>
                                            POWIAT KOSZALIN
                                        </option>
                                        <option>
                                            POWIAT KOSZALIŃSKI
                                        </option>
                                        <option>
                                            POWIAT KOŚCIAŃSKI
                                        </option>
                                        <option>
                                            POWIAT KOŚCIERSKI
                                        </option>
                                        <option>
                                            POWIAT KOZIENICKI
                                        </option>
                                        <option>
                                            POWIAT KRAKOWSKI
                                        </option>
                                        <option>
                                            POWIAT KRAKÓW
                                        </option>
                                        <option>
                                            POWIAT KRAPKOWICKI
                                        </option>
                                        <option>
                                            POWIAT KRASNOSTAWSKI
                                        </option>
                                        <option>
                                            POWIAT KRAŚNICKI
                                        </option>
                                        <option>
                                            POWIAT KROSNO
                                        </option>
                                        <option>
                                            POWIAT KROŚNIEŃSKI
                                        </option>
                                        <option>
                                            POWIAT KROTOSZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT KUTNOWSKI
                                        </option>
                                        <option>
                                            POWIAT KWIDZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT LEGIONOWSKI
                                        </option>
                                        <option>
                                            POWIAT LEGNICA
                                        </option>
                                        <option>
                                            POWIAT LEGNICKI
                                        </option>
                                        <option>
                                            POWIAT LESKI
                                        </option>
                                        <option>
                                            POWIAT LESZCZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT LESZNO
                                        </option>
                                        <option>
                                            POWIAT LEŻAJSKI
                                        </option>
                                        <option>
                                            POWIAT LĘBORSKI
                                        </option>
                                        <option>
                                            POWIAT LIDZBARSKI
                                        </option>
                                        <option>
                                            POWIAT LIMANOWSKI
                                        </option>
                                        <option>
                                            POWIAT LIPNOWSKI
                                        </option>
                                        <option>
                                            POWIAT LIPSKI
                                        </option>
                                        <option>
                                            POWIAT LUBACZOWSKI
                                        </option>
                                        <option>
                                            POWIAT LUBAŃSKI
                                        </option>
                                        <option>
                                            POWIAT LUBARTOWSKI
                                        </option>
                                        <option>
                                            POWIAT LUBELSKI
                                        </option>
                                        <option>
                                            POWIAT LUBIŃSKI
                                        </option>
                                        <option>
                                            POWIAT LUBLIN
                                        </option>
                                        <option>
                                            POWIAT LUBLINIECKI
                                        </option>
                                        <option>
                                            POWIAT LWÓWECKI
                                        </option>
                                        <option>
                                            POWIAT ŁAŃCUCKI
                                        </option>
                                        <option>
                                            POWIAT ŁASKI
                                        </option>
                                        <option>
                                            POWIAT ŁĘCZYCKI
                                        </option>
                                        <option>
                                            POWIAT ŁĘCZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT ŁOBESKI
                                        </option>
                                        <option>
                                            POWIAT ŁOMŻA
                                        </option>
                                        <option>
                                            POWIAT ŁOMŻYŃSKI
                                        </option>
                                        <option>
                                            POWIAT ŁOSICKI
                                        </option>
                                        <option>
                                            POWIAT ŁOWICKI
                                        </option>
                                        <option>
                                            POWIAT ŁÓDZKI WSCHODNI
                                        </option>
                                        <option>
                                            POWIAT ŁÓDŹ
                                        </option>
                                        <option>
                                            POWIAT ŁUKOWSKI
                                        </option>
                                        <option>
                                            POWIAT MAKOWSKI
                                        </option>
                                        <option>
                                            POWIAT MALBORSKI
                                        </option>
                                        <option>
                                            POWIAT MIECHOWSKI
                                        </option>
                                        <option>
                                            POWIAT MIELECKI
                                        </option>

                                </select>
                            </div>
                 <label>Rodzaj zdarzenia :</label>
                    <select id="filter_form_accidentType" name="filter_form[accidentType]"><option value=""></option><option value="01">Zderzenie pojazdów czołowe</option><option value="02">Zderzenie pojazdów boczne</option><option value="03">Zderzenie pojazdów tylne</option><option value="04">Najechanie na pieszego</option><option value="05">Najechanie na pojazd unieruchomiony</option><option value="06">Najechanie na drzewo, słup, inny obiekt drogowy</option><option value="A1">Najechanie na drzewo</option><option value="A2">Najechanie na słup, znak</option><option value="07">Najechanie na zapore kolejową</option><option value="08">Najechanie na dziurę, wybój, garb</option><option value="09">Najechanie na zwierzę</option><option value="A3">Najechanie na barierę ochronną</option><option value="10">Wywrócenie się pojazdu</option><option value="11">Wypadek z pasażerem</option><option value="12">Inne</option></select>

                                <br></br>
                                <label>Ulica: </label><input name="text" ></input>
                    <br></br>
                    <label>Miejscowość: </label><input name="text" ></input>

                    <br></br>
                    <input type="checkbox" value="piesi" /> piesi<br></br>
                    <input type="checkbox" value="rowerzyści" /> rowerzyści<br></br>
                    <input type="checkbox" value="samochody osobowe" checked /> samochody osobowe<br></br>
                    <input type="checkbox" value="samohody ciężarowe" /> samohody ciężarowe<br></br>
                    <input type="checkbox" value="motocykle i skutery" /> motocykle i skutery<br></br>
                    <input type="checkbox" value="tramwaje, trolejbusy" checked /> tramwaje, trolejbusy<br></br>
                    {/*<button type="submit" onClick={this.onSubmith}>Submit</button>*/}

            </form>
        )

    }
}
export default Form;