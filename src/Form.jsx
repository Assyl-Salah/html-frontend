import React from 'react';
import './Form.css';
//import {  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const style = {
    width: "50%",
    height: "300px",
    position: "fixed",
    marginLeft:"0px",
    marginTop:"20px",
    marginRight:"0px"


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
                                <br/>
                                <label >do dnia :</label><input  type="date"></input>

                                <br/>
                                <label>Powiat :</label>
                                <select name="powiat">

                                        <option>
                                            POWIAT ALEKSANDROWSKI
                                        </option>
                                        <option>
                                            POWIAT AUGUSTOWSKI
                                        </option>
                                        <option>
                                            POWIAT BARTOSZYCKI
                                        </option>
                                        <option>
                                            POWIAT BEŁCHATOWSKI
                                        </option>
                                        <option>
                                            POWIAT BĘDZIŃSKI
                                        </option>
                                        <option>
                                            POWIAT BIALSKI
                                        </option>
                                        <option>
                                            POWIAT BIAŁA PODLASKA
                                        </option>
                                        <option>
                                            POWIAT BIAŁOBRZESKI
                                        </option>
                                        <option>
                                            POWIAT BIAŁOGARDZKI
                                        </option>
                                        <option>
                                            POWIAT BIAŁOSTOCKI
                                        </option>
                                        <option>
                                            POWIAT BIAŁYSTOK
                                        </option>
                                        <option>
                                            POWIAT BIELSKI
                                        </option>
                                        <option>
                                            POWIAT BIELSKO-BIAŁA
                                        </option>
                                        <option>
                                            POWIAT BIERUŃSKO-LĘDZIŃSKI
                                        </option>
                                        <option>
                                            POWIAT BIESZCZADZKI
                                        </option>
                                        <option>
                                            POWIAT BIŁGORAJSKI
                                        </option>
                                        <option>
                                            POWIAT BOCHEŃSKI
                                        </option>
                                        <option>
                                            POWIAT BOLESŁAWIECKI
                                        </option>
                                        <option>
                                            POWIAT BRANIEWSKI
                                        </option>
                                        <option>
                                            POWIAT BRODNICKI
                                        </option>
                                        <option>
                                            POWIAT BRZESKI
                                        </option>
                                        <option>
                                            POWIAT BRZEZINY
                                        </option>
                                        <option>
                                            POWIAT BRZEZIŃSKI
                                        </option>
                                        <option>
                                            POWIAT BRZOZOWSKI
                                        </option>
                                        <option>
                                            POWIAT BUSKI
                                        </option>
                                        <option>
                                            POWIAT BYDGOSKI
                                        </option>
                                        <option>
                                            POWIAT BYDGOSZCZ
                                        </option>
                                        <option>
                                            POWIAT BYTOM
                                        </option>
                                        <option>
                                            POWIAT BYTOWSKI
                                        </option>
                                        <option>
                                            POWIAT CHEŁM
                                        </option>
                                        <option>
                                            POWIAT CHEŁMIŃSKI
                                        </option>
                                        <option>
                                            POWIAT CHEŁMSKI
                                        </option>
                                        <option>
                                            POWIAT CHODZIESKI
                                        </option>
                                        <option>
                                            POWIAT CHOJNICKI
                                        </option>
                                        <option>
                                            POWIAT CHORZÓW
                                        </option>
                                        <option>
                                            POWIAT CHOSZCZEŃSKI
                                        </option>
                                        <option>
                                            POWIAT CHRZANOWSKI
                                        </option>
                                        <option>
                                            POWIAT CIECHANOWSKI
                                        </option>
                                        <option>
                                            POWIAT CIESZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT CZARNKOWSKO-TRZCIANECKI
                                        </option>
                                        <option>
                                            POWIAT CZĘSTOCHOWA
                                        </option>
                                        <option>
                                            POWIAT CZĘSTOCHOWSKI
                                        </option>
                                        <option>
                                            POWIAT CZŁUCHOWSKI
                                        </option>
                                        <option>
                                            POWIAT DĄBROWA GÓRNICZA
                                        </option>
                                        <option>
                                            POWIAT DĄBROWSKI
                                        </option>
                                        <option>
                                            POWIAT DĘBICKI
                                        </option>
                                        <option>
                                            POWIAT DRAWSKI
                                        </option>
                                        <option>
                                            POWIAT DZIAŁDOWSKI
                                        </option>
                                        <option>
                                            POWIAT DZIERŻONIOWSKI
                                        </option>
                                        <option>
                                            POWIAT ELBLĄG
                                        </option>
                                        <option>
                                            POWIAT ELBLĄSKI
                                        </option>
                                        <option>
                                            POWIAT EŁCKI
                                        </option>
                                        <option>
                                            POWIAT GARWOLIŃSKI
                                        </option>
                                        <option>
                                            POWIAT GDAŃSK
                                        </option>
                                        <option>
                                            POWIAT GDAŃSKI
                                        </option>
                                        <option>
                                            POWIAT GDYNIA
                                        </option>
                                        <option>
                                            POWIAT GIŻYCKI
                                        </option>
                                        <option>
                                            POWIAT GLIWICE
                                        </option>
                                        <option>
                                            POWIAT GLIWICKI
                                        </option>
                                        <option>
                                            POWIAT GŁOGOWSKI
                                        </option>
                                        <option>
                                            POWIAT GŁUBCZYCKI
                                        </option>
                                        <option>
                                            POWIAT GNIEŹNIEŃSKI
                                        </option>
                                        <option>
                                            POWIAT GOLENIOWSKI
                                        </option>
                                        <option>
                                            POWIAT GOLUBSKO-DOBRZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT GOŁDAPSKI
                                        </option>
                                        <option>
                                            POWIAT GORLICKI
                                        </option>
                                        <option>
                                            POWIAT GORZOWSKI
                                        </option>
                                        <option>
                                            POWIAT GORZÓW WIELKOPOLSKI
                                        </option>
                                        <option>
                                            POWIAT GOSTYNIŃSKI
                                        </option>
                                        <option>
                                            POWIAT GOSTYŃSKI
                                        </option>
                                        <option>
                                            POWIAT GÓROWSKI
                                        </option>
                                        <option>
                                            POWIAT GRAJEWSKI
                                        </option>
                                        <option>
                                            POWIAT GRODZISKI
                                        </option>
                                        <option>
                                            POWIAT GRÓJECKI
                                        </option>
                                        <option>
                                            POWIAT GRUDZIĄDZ
                                        </option>
                                        <option>
                                            POWIAT GRUDZIĄDZKI
                                        </option>
                                        <option>
                                            POWIAT GRYFICKI
                                        </option>
                                        <option>
                                            POWIAT GRYFIŃSKI
                                        </option>
                                        <option>
                                            POWIAT HAJNOWSKI
                                        </option>
                                        <option>
                                            POWIAT HRUBIESZOWSKI
                                        </option>
                                        <option>
                                            POWIAT IŁAWSKI
                                        </option>
                                        <option>
                                            POWIAT INOWROCŁAWSKI
                                        </option>
                                        <option>
                                            POWIAT JANOWSKI
                                        </option>
                                        <option>
                                            POWIAT JAROCIŃSKI
                                        </option>
                                        <option>
                                            POWIAT JAROSŁAWSKI
                                        </option>
                                        <option>
                                            POWIAT JASIELSKI
                                        </option>
                                        <option>
                                            POWIAT JASTRZĘBIE-ZDRÓJ
                                        </option>
                                        <option>
                                            POWIAT JAWORSKI
                                        </option>
                                        <option>
                                            POWIAT JAWORZNO
                                        </option>
                                        <option>
                                            POWIAT JELENIA GÓRA
                                        </option>
                                        <option>
                                            POWIAT JELENIOGÓRSKI
                                        </option>
                                        <option>
                                            POWIAT JĘDRZEJOWSKI
                                        </option>
                                        <option>
                                            POWIAT KALISKI
                                        </option>
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
                                        <option>
                                            POWIAT MIĘDZYCHODZKI
                                        </option>
                                        <option>
                                            POWIAT MIĘDZYRZECKI
                                        </option>
                                        <option>
                                            POWIAT MIKOŁOWSKI
                                        </option>
                                        <option>
                                            POWIAT MILICKI
                                        </option>
                                        <option>
                                            POWIAT MIŃSKI
                                        </option>
                                        <option>
                                            POWIAT MŁAWSKI
                                        </option>
                                        <option>
                                            POWIAT MOGILEŃSKI
                                        </option>
                                        <option>
                                            POWIAT MONIECKI
                                        </option>
                                        <option>
                                            POWIAT MRĄGOWSKI
                                        </option>
                                        <option>
                                            POWIAT MYSŁOWICE
                                        </option>
                                        <option>
                                            POWIAT MYSZKOWSKI
                                        </option>
                                        <option>
                                            POWIAT MYŚLENICKI
                                        </option>
                                        <option>
                                            POWIAT MYŚLIBORSKI
                                        </option>
                                        <option>
                                            POWIAT NAKIELSKI
                                        </option>
                                        <option>
                                            POWIAT NAMYSŁOWSKI
                                        </option>
                                        <option>
                                            POWIAT NIDZICKI
                                        </option>
                                        <option>
                                            POWIAT NIŻAŃSKI
                                        </option>
                                        <option>
                                            POWIAT NOWODWORSKI
                                        </option>
                                        <option>
                                            POWIAT NOWOMIEJSKI
                                        </option>
                                        <option>
                                            POWIAT NOWOSĄDECKI
                                        </option>
                                        <option>
                                            POWIAT NOWOSOLSKI
                                        </option>
                                        <option>
                                            POWIAT NOWOTARSKI
                                        </option>
                                        <option>
                                            POWIAT NOWOTOMYSKI
                                        </option>
                                        <option>
                                            POWIAT NOWY SĄCZ
                                        </option>
                                        <option>
                                            POWIAT NYSKI
                                        </option>
                                        <option>
                                            POWIAT OBORNICKI
                                        </option>
                                        <option>
                                            POWIAT OLECKI
                                        </option>
                                        <option>
                                            POWIAT OLESKI
                                        </option>
                                        <option>
                                            POWIAT OLEŚNICKI
                                        </option>
                                        <option>
                                            POWIAT OLKUSKI
                                        </option>
                                        <option>
                                            POWIAT OLSZTYN
                                        </option>
                                        <option>
                                            POWIAT OLSZTYŃSKI
                                        </option>
                                        <option>
                                            POWIAT OŁAWSKI
                                        </option>
                                        <option>
                                            POWIAT OPATOWSKI
                                        </option>
                                        <option>
                                            POWIAT OPOCZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT OPOLE
                                        </option>
                                        <option>
                                            POWIAT OPOLSKI
                                        </option>
                                        <option>
                                            POWIAT OSTROŁĘCKI
                                        </option>
                                        <option>
                                            POWIAT OSTROŁĘKA
                                        </option>
                                        <option>
                                            POWIAT OSTROWIECKI
                                        </option>
                                        <option>
                                            POWIAT OSTROWSKI
                                        </option>
                                        <option>
                                            POWIAT OSTRÓDZKI
                                        </option>
                                        <option>
                                            POWIAT OSTRZESZOWSKI
                                        </option>
                                        <option>
                                            POWIAT OŚWIĘCIMSKI
                                        </option>
                                        <option>
                                            POWIAT OTWOCKI
                                        </option>
                                        <option>
                                            POWIAT PABIANICKI
                                        </option>
                                        <option>
                                            POWIAT PAJĘCZAŃSKI
                                        </option>
                                        <option>
                                            POWIAT PARCZEWSKI
                                        </option>
                                        <option>
                                            POWIAT PIASECZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT PIEKARY ŚLĄSKIE
                                        </option>
                                        <option>
                                            POWIAT PILSKI
                                        </option>
                                        <option>
                                            POWIAT PIŃCZOWSKI
                                        </option>
                                        <option>
                                            POWIAT PIOTRKOWSKI
                                        </option>
                                        <option>
                                            POWIAT PIOTRKÓW TRYBUNALSKI
                                        </option>
                                        <option>
                                            POWIAT PISKI
                                        </option>
                                        <option>
                                            POWIAT PLESZEWSKI
                                        </option>
                                        <option>
                                            POWIAT PŁOCK
                                        </option>
                                        <option>
                                            POWIAT PŁOCKI
                                        </option>
                                        <option>
                                            POWIAT PŁOŃSKI
                                        </option>
                                        <option>
                                            POWIAT PODDĘBICKI
                                        </option>
                                        <option>
                                            POWIAT POLICKI
                                        </option>
                                        <option>
                                            POWIAT POLKOWICKI
                                        </option>
                                        <option>
                                            POWIAT POZNAŃ
                                        </option>
                                        <option>
                                            POWIAT POZNAŃSKI
                                        </option>
                                        <option>
                                            POWIAT PROSZOWICKI
                                        </option>
                                        <option>
                                            POWIAT PRUDNICKI
                                        </option>
                                        <option>
                                            POWIAT PRUSZKOWSKI
                                        </option>
                                        <option>
                                            POWIAT PRZASNYSKI
                                        </option>
                                        <option>
                                            POWIAT PRZEMYSKI
                                        </option>
                                        <option>
                                            POWIAT PRZEMYŚL
                                        </option>
                                        <option>
                                            POWIAT PRZEWORSKI
                                        </option>
                                        <option>
                                            POWIAT PRZYSUSKI
                                        </option>
                                        <option>
                                            POWIAT PSZCZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT PUCKI
                                        </option>
                                        <option>
                                            POWIAT PUŁAWSKI
                                        </option>
                                        <option>
                                            POWIAT PUŁTUSKI
                                        </option>
                                        <option>
                                            POWIAT PYRZYCKI
                                        </option>
                                        <option>
                                            POWIAT RACIBORSKI
                                        </option>
                                        <option>
                                            POWIAT RADOM
                                        </option>
                                        <option>
                                            POWIAT RADOMSKI
                                        </option>
                                        <option>
                                            POWIAT RADOMSZCZAŃSKI
                                        </option>
                                        <option>
                                            POWIAT RADZIEJOWSKI
                                        </option>
                                        <option>
                                            POWIAT RADZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT RAWICKI
                                        </option>
                                        <option>
                                            POWIAT RAWSKI
                                        </option>
                                        <option>
                                            POWIAT ROPCZYCKO-SĘDZISZOWSKI
                                        </option>
                                        <option>
                                            POWIAT RUDA ŚLĄSKA
                                        </option>
                                        <option>
                                            POWIAT RYBNICKI
                                        </option>
                                        <option>
                                            POWIAT RYBNIK
                                        </option>
                                        <option>
                                            POWIAT RYCKI
                                        </option>
                                        <option>
                                            POWIAT RYPIŃSKI
                                        </option>
                                        <option>
                                            POWIAT RZESZOWSKI
                                        </option>
                                        <option>
                                            POWIAT RZESZÓW
                                        </option>
                                        <option>
                                            POWIAT SANDOMIERSKI
                                        </option>
                                        <option>
                                            POWIAT SANOCKI
                                        </option>
                                        <option>
                                            POWIAT SEJNEŃSKI
                                        </option>
                                        <option>
                                            POWIAT SĘPOLEŃSKI
                                        </option>
                                        <option>
                                            POWIAT SIEDLCE
                                        </option>
                                        <option>
                                            POWIAT SIEDLECKI
                                        </option>
                                        <option>
                                            POWIAT SIEMIANOWICE ŚLĄSKIE
                                        </option>
                                        <option>
                                            POWIAT SIEMIATYCKI
                                        </option>
                                        <option>
                                            POWIAT SIERADZKI
                                        </option>
                                        <option>
                                            POWIAT SIERPECKI
                                        </option>
                                        <option>
                                            POWIAT SKARŻYSKI
                                        </option>
                                        <option>
                                            POWIAT SKIERNIEWICE
                                        </option>
                                        <option>
                                            POWIAT SKIERNIEWICKI
                                        </option>
                                        <option>
                                            POWIAT SŁAWIEŃSKI
                                        </option>
                                        <option>
                                            POWIAT SŁUBICKI
                                        </option>
                                        <option>
                                            POWIAT SŁUPECKI
                                        </option>
                                        <option>
                                            POWIAT SŁUPSK
                                        </option>
                                        <option>
                                            POWIAT SŁUPSKI
                                        </option>
                                        <option>
                                            POWIAT SOCHACZEWSKI
                                        </option>
                                        <option>
                                            POWIAT SOKOŁOWSKI
                                        </option>
                                        <option>
                                            POWIAT SOKÓLSKI
                                        </option>
                                        <option>
                                            POWIAT SOPOT
                                        </option>
                                        <option>
                                            POWIAT SOSNOWIEC
                                        </option>
                                        <option>
                                            POWIAT STALOWOWOLSKI
                                        </option>
                                        <option>
                                            POWIAT STARACHOWICKI
                                        </option>
                                        <option>
                                            POWIAT STARGARDZKI
                                        </option>
                                        <option>
                                            POWIAT STAROGARDZKI
                                        </option>
                                        <option>
                                            POWIAT STASZOWSKI
                                        </option>
                                        <option>
                                            POWIAT STRZELECKI
                                        </option>
                                        <option>
                                            POWIAT STRZELECKO-DREZDENECKI
                                        </option>
                                        <option>
                                            POWIAT STRZELIŃSKI
                                        </option>
                                        <option>
                                            POWIAT STRZYŻOWSKI
                                        </option>
                                        <option>
                                            POWIAT SULĘCIŃSKI
                                        </option>
                                        <option>
                                            POWIAT SUSKI
                                        </option>
                                        <option>
                                            POWIAT SUWALSKI
                                        </option>
                                        <option>
                                            POWIAT SUWAŁKI
                                        </option>
                                        <option>
                                            POWIAT SZAMOTULSKI
                                        </option>
                                        <option>
                                            POWIAT SZCZECIN
                                        </option>
                                        <option>
                                            POWIAT SZCZECINECKI
                                        </option>
                                        <option>
                                            POWIAT SZCZYCIEŃSKI
                                        </option>
                                        <option>
                                            POWIAT SZTUMSKI
                                        </option>
                                        <option>
                                            POWIAT SZYDŁOWIECKI
                                        </option>
                                        <option>
                                            POWIAT ŚREDZKI
                                        </option>
                                        <option>
                                            POWIAT ŚREMSKI
                                        </option>
                                        <option>
                                            POWIAT ŚWIDNICKI
                                        </option>
                                        <option>
                                            POWIAT ŚWIDWIŃSKI
                                        </option>
                                        <option>
                                            POWIAT ŚWIEBODZIŃSKI
                                        </option>
                                        <option>
                                            POWIAT ŚWIECKI
                                        </option>
                                        <option>
                                            POWIAT ŚWIĘTOCHŁOWICE
                                        </option>
                                        <option>
                                            POWIAT ŚWINOUJŚCIE
                                        </option>
                                        <option>
                                            POWIAT TARNOBRZEG
                                        </option>
                                        <option>
                                            POWIAT TARNOBRZESKI
                                        </option>
                                        <option>
                                            POWIAT TARNOGÓRSKI
                                        </option>
                                        <option>
                                            POWIAT TARNOWSKI
                                        </option>
                                        <option>
                                            POWIAT TARNÓW
                                        </option>
                                        <option>
                                            POWIAT TATRZAŃSKI
                                        </option>
                                        <option>
                                            POWIAT TCZEWSKI
                                        </option>
                                        <option>
                                            POWIAT TOMASZOWSKI
                                        </option>
                                        <option>
                                            POWIAT TORUŃ
                                        </option>
                                        <option>
                                            POWIAT TORUŃSKI
                                        </option>
                                        <option>
                                            POWIAT TRZEBNICKI
                                        </option>
                                        <option>
                                            POWIAT TUCHOLSKI
                                        </option>
                                        <option>
                                            POWIAT TURECKI
                                        </option>
                                        <option>
                                            POWIAT TYCHY
                                        </option>
                                        <option>
                                            POWIAT WADOWICKI
                                        </option>
                                        <option>
                                            POWIAT WAŁBRZYCH
                                        </option>
                                        <option>
                                            POWIAT WAŁBRZYSKI
                                        </option>
                                        <option>
                                            POWIAT WAŁECKI
                                        </option>
                                        <option>
                                            POWIAT WARSZAWA
                                        </option>
                                        <option>
                                            POWIAT WARSZAWSKI ZACHODNI
                                        </option>
                                        <option>
                                            POWIAT WĄBRZESKI
                                        </option>
                                        <option>
                                            POWIAT WĄGROWIECKI
                                        </option>
                                        <option>
                                            POWIAT WEJHEROWSKI
                                        </option>
                                        <option>
                                            POWIAT WĘGORZEWSKI
                                        </option>
                                        <option>
                                            POWIAT WĘGROWSKI
                                        </option>
                                        <option>
                                            POWIAT WIELICKI
                                        </option>
                                        <option>
                                            POWIAT WIELUŃSKI
                                        </option>
                                        <option>
                                            POWIAT WIERUSZOWSKI
                                        </option>
                                        <option>
                                            POWIAT WŁOCŁAWEK
                                        </option>
                                        <option>
                                            POWIAT WŁOCŁAWSKI
                                        </option>
                                        <option>
                                            POWIAT WŁODAWSKI
                                        </option>
                                        <option>
                                            POWIAT WŁOSZCZOWSKI
                                        </option>
                                        <option>
                                            POWIAT WODZISŁAWSKI
                                        </option>
                                        <option>
                                            POWIAT WOLSZTYŃSKI
                                        </option>
                                        <option>
                                            POWIAT WOŁOMIŃSKI
                                        </option>
                                        <option>
                                            POWIAT WOŁOWSKI
                                        </option>
                                        <option>
                                            POWIAT WROCŁAW
                                        </option>
                                        <option>
                                            POWIAT WROCŁAWSKI
                                        </option>
                                        <option>
                                            POWIAT WRZESIŃSKI
                                        </option>
                                        <option>
                                            POWIAT WSCHOWSKI
                                        </option>
                                        <option>
                                            POWIAT WYSOKOMAZOWIECKI
                                        </option>
                                        <option>
                                            POWIAT WYSZKOWSKI
                                        </option>
                                        <option>
                                            POWIAT ZABRZE
                                        </option>
                                        <option>
                                            POWIAT ZAMBROWSKI
                                        </option>
                                        <option>
                                            POWIAT ZAMOJSKI
                                        </option>
                                        <option>
                                            POWIAT ZAMOŚĆ
                                        </option>
                                        <option>
                                            POWIAT ZAWIERCIAŃSKI
                                        </option>
                                        <option>
                                            POWIAT ZĄBKOWICKI
                                        </option>
                                        <option>
                                            POWIAT ZDUŃSKOWOLSKI
                                        </option>
                                        <option>
                                            POWIAT ZGIERSKI
                                        </option>
                                        <option>
                                            POWIAT ZGORZELECKI
                                        </option>
                                        <option>
                                            POWIAT ZIELONA GÓRA
                                        </option>
                                        <option>
                                            POWIAT ZIELONOGÓRSKI
                                        </option>
                                        <option>
                                            POWIAT ZŁOTORYJSKI
                                        </option>
                                        <option>
                                            POWIAT ZŁOTOWSKI
                                        </option>
                                        <option>
                                            POWIAT ZWOLEŃSKI
                                        </option>
                                        <option>
                                            POWIAT ŻAGAŃSKI
                                        </option>
                                        <option>
                                            POWIAT ŻARSKI
                                        </option>
                                        <option>
                                            POWIAT ŻNIŃSKI
                                        </option>
                                        <option>
                                            POWIAT ŻORY
                                        </option>
                                        <option>
                                            POWIAT ŻUROMIŃSKI
                                        </option>
                                        <option>
                                            POWIAT ŻYRARDOWSKI
                                        </option>
                                        <option>
                                            POWIAT ŻYWIECKI
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
                    <button type="submit" onClick={this.onSubmith}>Submit</button>

            </form>
        )

    }
}
export default Form;