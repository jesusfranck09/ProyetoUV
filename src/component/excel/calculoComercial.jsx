import React, { Component } from 'react'
import './index.css'
import {Card, Input,DatePicker,Button,Modal,Row,Col,Divider  } from 'antd'
import { FunctionOutlined  } from '@ant-design/icons';
import moment from 'moment';
import swal from 'sweetalert2'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bg from './bg3.png'
import { PDFExport } from '@progress/kendo-react-pdf';
const PageTemplate = (props) => {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const d = new Date();
    
    let dia =  new Date().toLocaleString('es-Es', {  weekday: 'long' });
    let dia2 =  new Date().getDate()
    let mes = monthNames[d.getMonth()];
    let año  = new Date().getFullYear();
    const str2 = dia.charAt(0).toUpperCase() + dia.slice(1);

    let fechaCompleta =  dia + "/" + mes + "/" + año;

    return (
      <div  style={{position:"absolute",bottom:"10px",width:550}}>
      <center>  
      <p  className = "textabla3" color="black" style = {{marginBottom:10}}></p>
      </center>
      </div>
    );
  };

class CalculoComercial extends Component {
    pdfExportComponent
    constructor(props){
        super(props)
        this.state = { 
            cardInicial:true,
            cardCostos:false,
            cliente:'',
            orden:'',
            descripcion:'',            
            cantidad:'',
            fechaI:'',
            fechaF:'',
            fecha1:'',
            fecha2:'',
            fecha3:'',
            fecha4:'',
            fecha5:'',
            fecha6:'',
            fecha7:'',
            fecha8:'',
            fecha9:'',
            fecha10:'',
            fechaCompleta:'',
            partida1:false,
            partida2:false,
            partida3:false,
            partida4:false,
            partida5:false,
            partida6:false,
            partida7:false,
            partida8:false,
            partida9:false,
            partida10:false,
            disabledButton1:false,
            disabledButton2:false,
            disabledButton3:false,
            disabledButton4:false,
            disabledButton5:false,
            disabledButton6:false,
            disabledButton7:false,
            disabledButton8:false,
            disabledButton9:false,
            disabledButton10:false,
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            input5:'',
            input6:'',
            input7:'',
            input8:'',
            input9:'',
            input10:'',
            input11:'',
            input21:'',
            input31:'',
            input41:'',
            input51:'',
            input61:'',
            input71:'',
            input81:'',
            input91:'',
            input101:'',

            fechaM1:'',
            fechaM2:'',
            fechaM3:'',
            fechaM4:'',
            fechaM5:'',
            fechaM6:'',
            fechaM7:'',
            fechaM8:'',
            fechaM9:'',
            fechaM10:'',
            partidaM1:false,
            partidaM2:false,
            partidaM3:false,
            partidaM4:false,
            partidaM5:false,
            partidaM6:false,
            partidaM7:false,
            partidaM8:false,
            partidaM9:false,
            partidaM10:false,
            disabledButtonM1:false,
            disabledButtonM2:false,
            disabledButtonM3:false,
            disabledButtonM4:false,
            disabledButtonM5:false,
            disabledButtonM6:false,
            disabledButtonM7:false,
            disabledButtonM8:false,
            disabledButtonM9:false,
            disabledButtonM10:false,
            inputM1:'',
            inputM2:'',
            inputM3:'',
            inputM4:'',
            inputM5:'',
            inputM6:'',
            inputM7:'',
            inputM8:'',
            inputM9:'',
            inputM10:'',
            inputM11:'',
            inputM21:'',
            inputM31:'',
            inputM41:'',
            inputM51:'',
            inputM61:'',
            inputM71:'',
            inputM81:'',
            inputM91:'',
            inputM101:'',
            inputM111:'',
            inputM211:'',
            inputM311:'',
            inputM411:'',
            inputM511:'',
            inputM611:'',
            inputM711:'',
            inputM811:'',
            inputM911:'',
            inputM1011:'',

            fechaG1:'',
            fechaG2:'',
            fechaG3:'',
            fechaG4:'',
            fechaG5:'',
            fechaG6:'',
            fechaG7:'',
            fechaG8:'',
            fechaG9:'',
            fechaG10:'',
            partidaG1:false,
            partidaG2:false,
            partidaG3:false,
            partidaG4:false,
            partidaG5:false,
            partidaG6:false,
            partidaG7:false,
            partidaG8:false,
            partidaG9:false,
            partidaG10:false,
            disabledButtonG1:false,
            disabledButtonG2:false,
            disabledButtonG3:false,
            disabledButtonG4:false,
            disabledButtonG5:false,
            disabledButtonG6:false,
            disabledButtonG7:false,
            disabledButtonG8:false,
            disabledButtonG9:false,
            disabledButtonG10:false,
            inputG1:'',
            inputG2:'',
            inputG3:'',
            inputG4:'',
            inputG5:'',
            inputG6:'',
            inputG7:'',
            inputG8:'',
            inputG9:'',
            inputG10:'',
            inputG11:'',
            inputG21:'',
            inputG31:'',
            inputG41:'',
            inputG51:'',
            inputG61:'',
            inputG71:'',
            inputG81:'',
            inputG91:'',
            inputG101:'',
            isModalVisible:false,
            cardAnalisis:false,
            arrayMaterialesDirectos:[],
            costoTotalMaterialesDirectos:'',
            arrayManoDeObra:[],
            costoTotalManoDeObra:'',
            arrayGastos:[],
            costoTotalarrayGastos:'',
            buttonCancelar:false
        } 
        this.onChangeClient = this.onChangeClient.bind(this)
        this.onChangeOrder = this.onChangeOrder.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeCantidad = this.onChangeCantidad.bind(this)
        this.onChangeDateI = this.onChangeDateI.bind(this)
        this.onChangeDateFinal = this.onChangeDateFinal.bind(this)
        this.onChangeDate1 = this.onChangeDate1.bind(this)
        this.onChangeDate2 = this.onChangeDate2.bind(this)
        this.onChangeDate3 = this.onChangeDate3.bind(this)
        this.onChangeDate4 = this.onChangeDate4.bind(this)
        this.onChangeDate5 = this.onChangeDate5.bind(this)
        this.onChangeDate6 = this.onChangeDate6.bind(this)
        this.onChangeDate7 = this.onChangeDate7.bind(this)
        this.onChangeDate8 = this.onChangeDate8.bind(this)
        this.onChangeDate9 = this.onChangeDate9.bind(this)
        this.onChangeDate10 = this.onChangeDate10.bind(this)
        this.onChangeInput1 = this.onChangeInput1.bind(this)
        this.onChangeInput2 = this.onChangeInput2.bind(this)
        this.onChangeInput3 = this.onChangeInput3.bind(this)
        this.onChangeInput4 = this.onChangeInput4.bind(this)
        this.onChangeInput5 = this.onChangeInput5.bind(this)
        this.onChangeInput6 = this.onChangeInput6.bind(this)
        this.onChangeInput7 = this.onChangeInput7.bind(this)
        this.onChangeInput8 = this.onChangeInput8.bind(this)
        this.onChangeInput9 = this.onChangeInput9.bind(this)
        this.onChangeInput10 = this.onChangeInput10.bind(this)
        this.onChangeInput11 = this.onChangeInput11.bind(this)
        this.onChangeInput21 = this.onChangeInput21.bind(this)
        this.onChangeInput31 = this.onChangeInput31.bind(this)
        this.onChangeInput41 = this.onChangeInput41.bind(this)
        this.onChangeInput51 = this.onChangeInput51.bind(this)
        this.onChangeInput61 = this.onChangeInput61.bind(this)
        this.onChangeInput71 = this.onChangeInput71.bind(this)
        this.onChangeInput81 = this.onChangeInput81.bind(this)
        this.onChangeInput91 = this.onChangeInput91.bind(this)
        this.onChangeInput101 = this.onChangeInput101.bind(this)
        
        this.onChangeDateM1 = this.onChangeDateM1.bind(this)
        this.onChangeDateM2 = this.onChangeDateM2.bind(this)
        this.onChangeDateM3 = this.onChangeDateM3.bind(this)
        this.onChangeDateM4 = this.onChangeDateM4.bind(this)
        this.onChangeDateM5 = this.onChangeDateM5.bind(this)
        this.onChangeDateM6 = this.onChangeDateM6.bind(this)
        this.onChangeDateM7 = this.onChangeDateM7.bind(this)
        this.onChangeDateM8 = this.onChangeDateM8.bind(this)
        this.onChangeDateM9 = this.onChangeDateM9.bind(this)
        this.onChangeDateM10 = this.onChangeDateM10.bind(this)
        this.onChangeInputM1 = this.onChangeInputM1.bind(this)
        this.onChangeInputM2 = this.onChangeInputM2.bind(this)
        this.onChangeInputM3 = this.onChangeInputM3.bind(this)
        this.onChangeInputM4 = this.onChangeInputM4.bind(this)
        this.onChangeInputM5 = this.onChangeInputM5.bind(this)
        this.onChangeInputM6 = this.onChangeInputM6.bind(this)
        this.onChangeInputM7 = this.onChangeInputM7.bind(this)
        this.onChangeInputM8 = this.onChangeInputM8.bind(this)
        this.onChangeInputM9 = this.onChangeInputM9.bind(this)
        this.onChangeInputM10 = this.onChangeInputM10.bind(this)
        this.onChangeInputM11 = this.onChangeInputM11.bind(this)
        this.onChangeInputM21 = this.onChangeInputM21.bind(this)
        this.onChangeInputM31 = this.onChangeInputM31.bind(this)
        this.onChangeInputM41 = this.onChangeInputM41.bind(this)
        this.onChangeInputM51 = this.onChangeInputM51.bind(this)
        this.onChangeInputM61 = this.onChangeInputM61.bind(this)
        this.onChangeInputM71 = this.onChangeInputM71.bind(this)
        this.onChangeInputM81 = this.onChangeInputM81.bind(this)
        this.onChangeInputM91 = this.onChangeInputM91.bind(this)
        this.onChangeInputM101 = this.onChangeInputM101.bind(this)
        this.onChangeInputM111 = this.onChangeInputM111.bind(this)
        this.onChangeInputM211 = this.onChangeInputM211.bind(this)
        this.onChangeInputM311 = this.onChangeInputM311.bind(this)
        this.onChangeInputM411 = this.onChangeInputM411.bind(this)
        this.onChangeInputM511 = this.onChangeInputM511.bind(this)
        this.onChangeInputM611 = this.onChangeInputM611.bind(this)
        this.onChangeInputM711 = this.onChangeInputM711.bind(this)
        this.onChangeInputM811 = this.onChangeInputM811.bind(this)
        this.onChangeInputM911 = this.onChangeInputM911.bind(this)
        this.onChangeInputM1011 = this.onChangeInputM1011.bind(this)

        this.onChangeDateM1 = this.onChangeDateM1.bind(this)
        this.onChangeDateM2 = this.onChangeDateM2.bind(this)
        this.onChangeDateM3 = this.onChangeDateM3.bind(this)
        this.onChangeDateM4 = this.onChangeDateM4.bind(this)
        this.onChangeDateM5 = this.onChangeDateM5.bind(this)
        this.onChangeDateM6 = this.onChangeDateM6.bind(this)
        this.onChangeDateM7 = this.onChangeDateM7.bind(this)
        this.onChangeDateM8 = this.onChangeDateM8.bind(this)
        this.onChangeDateM9 = this.onChangeDateM9.bind(this)
        this.onChangeDateM10 = this.onChangeDateM10.bind(this)
        this.onChangeInputM1 = this.onChangeInputM1.bind(this)
        this.onChangeInputM2 = this.onChangeInputM2.bind(this)
        this.onChangeInputM3 = this.onChangeInputM3.bind(this)
        this.onChangeInputM4 = this.onChangeInputM4.bind(this)
        this.onChangeInputM5 = this.onChangeInputM5.bind(this)
        this.onChangeInputM6 = this.onChangeInputM6.bind(this)
        this.onChangeInputM7 = this.onChangeInputM7.bind(this)
        this.onChangeInputM8 = this.onChangeInputM8.bind(this)
        this.onChangeInputM9 = this.onChangeInputM9.bind(this)
        this.onChangeInputM10 = this.onChangeInputM10.bind(this)
        this.onChangeInputM11 = this.onChangeInputM11.bind(this)
        this.onChangeInputM21 = this.onChangeInputM21.bind(this)
        this.onChangeInputM31 = this.onChangeInputM31.bind(this)
        this.onChangeInputM41 = this.onChangeInputM41.bind(this)
        this.onChangeInputM51 = this.onChangeInputM51.bind(this)
        this.onChangeInputM61 = this.onChangeInputM61.bind(this)
        this.onChangeInputM71 = this.onChangeInputM71.bind(this)
        this.onChangeInputM81 = this.onChangeInputM81.bind(this)
        this.onChangeInputM91 = this.onChangeInputM91.bind(this)
        this.onChangeInputM101 = this.onChangeInputM101.bind(this)
        
        this.onChangeDateG1 = this.onChangeDateG1.bind(this)
        this.onChangeDateG2 = this.onChangeDateG2.bind(this)
        this.onChangeDateG3 = this.onChangeDateG3.bind(this)
        this.onChangeDateG4 = this.onChangeDateG4.bind(this)
        this.onChangeDateG5 = this.onChangeDateG5.bind(this)
        this.onChangeDateG6 = this.onChangeDateG6.bind(this)
        this.onChangeDateG7 = this.onChangeDateG7.bind(this)
        this.onChangeDateG8 = this.onChangeDateG8.bind(this)
        this.onChangeDateG9 = this.onChangeDateG9.bind(this)
        this.onChangeDateG10 = this.onChangeDateG10.bind(this)
        this.onChangeInputG1 = this.onChangeInputG1.bind(this)
        this.onChangeInputG2 = this.onChangeInputG2.bind(this)
        this.onChangeInputG3 = this.onChangeInputG3.bind(this)
        this.onChangeInputG4 = this.onChangeInputG4.bind(this)
        this.onChangeInputG5 = this.onChangeInputG5.bind(this)
        this.onChangeInputG6 = this.onChangeInputG6.bind(this)
        this.onChangeInputG7 = this.onChangeInputG7.bind(this)
        this.onChangeInputG8 = this.onChangeInputG8.bind(this)
        this.onChangeInputG9 = this.onChangeInputG9.bind(this)
        this.onChangeInputG10 = this.onChangeInputG10.bind(this)
        this.onChangeInputG11 = this.onChangeInputG11.bind(this)
        this.onChangeInputG21 = this.onChangeInputG21.bind(this)
        this.onChangeInputG31 = this.onChangeInputG31.bind(this)
        this.onChangeInputG41 = this.onChangeInputG41.bind(this)
        this.onChangeInputG51 = this.onChangeInputG51.bind(this)
        this.onChangeInputG61 = this.onChangeInputG61.bind(this)
        this.onChangeInputG71 = this.onChangeInputG71.bind(this)
        this.onChangeInputG81 = this.onChangeInputG81.bind(this)
        this.onChangeInputG91 = this.onChangeInputG91.bind(this)
        this.onChangeInputG101 = this.onChangeInputG101.bind(this)
        this.onOk = this.onOk.bind(this)

    }

    onOk(){
        this.setState({isModalVisible:false})
    }
    componentWillMount(){
        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        const d = new Date();
        
        let dia =  new Date().toLocaleString('es-Es', {  weekday: 'long' });
        let dia2 =  new Date().getDate()
        let mes = monthNames[d.getMonth()];
        let año  = new Date().getFullYear();
        const str2 = dia.charAt(0).toUpperCase() + dia.slice(1);

        let fechaCompleta = str2 + " " +  dia2 + " de " + mes + " del " + año;

        this.setState({fechaActual: fechaCompleta})
    }
    onChangeClient(param){
        this.setState({cliente:param.target.value.toUpperCase()})
    }
    onChangeOrder(e){
        this.setState({orden:e.target.value.toUpperCase()})
    }
    onChangeDescription(e){
        this.setState({descripcion:e.target.value.toUpperCase()})
    }
    onChangeCantidad(e){
        this.setState({cantidad:e.target.value})
    }
    onChangeDate1(e){
        if(e){
            this.setState({fecha1: e})
        }
    }
    
    onChangeDate2(e){
        if(e){
            this.setState({fecha2: e})
        }
    }
    onChangeDate3(e){
        if(e){
            this.setState({fecha3: e})
        }
    }
    onChangeDate4(e){
        if(e){
            this.setState({fecha4: e})
        }
    }
    onChangeDate5(e){
        if(e){
            this.setState({fecha5: e})
        }
    }
    onChangeDate6(e){
        if(e){
            this.setState({fecha6: e})
        }
    }
    onChangeDate7(e){
        if(e){
            this.setState({fecha7: e})
        }
    }
    onChangeDate8(e){
        if(e){
            this.setState({fecha8: e})
        }
    }
    onChangeDate9(e){
        if(e){
            this.setState({fecha9: e})
        }
    }
    onChangeDate10(e){
        if(e){
            this.setState({fecha10: e})
        }
    }
    onChangeInput1(e){
        this.setState({input1:e.target.value})
    }
    onChangeInput2(e){
        this.setState({input2:e.target.value})
    }
    onChangeInput3(e){
        this.setState({input3:e.target.value})
    }
    onChangeInput4(e){
        this.setState({input4:e.target.value})
    }
    onChangeInput5(e){
        this.setState({input5:e.target.value})
    }
    onChangeInput6(e){
        this.setState({input6:e.target.value})
    }
    onChangeInput7(e){
        this.setState({input7:e.target.value})
    }
    onChangeInput8(e){
        this.setState({input8:e.target.value})
    }
    onChangeInput9(e){
        this.setState({input9:e.target.value})
    }
    onChangeInput10(e){
        this.setState({input10:e.target.value})
    }
    onChangeInput11(e){
        this.setState({input11:e.target.value})
    }
    onChangeInput21(e){
        this.setState({input21:e.target.value})
    }
    onChangeInput31(e){
        this.setState({input31:e.target.value})
    }
    onChangeInput41(e){
        this.setState({input41:e.target.value})
    }
    onChangeInput51(e){
        this.setState({input51:e.target.value})
    }
    onChangeInput61(e){
        this.setState({input61:e.target.value})
    }
    onChangeInput71(e){
        this.setState({input71:e.target.value})
    }
    onChangeInput81(e){
        this.setState({input81:e.target.value})
    }
    onChangeInput91(e){
        this.setState({input91:e.target.value})
    }
    onChangeInput101(e){
        this.setState({input101:e.target.value})
    }


    onChangeDateM1(e){
        if(e){
            this.setState({fechaM1: e})
        }
    }
    
    onChangeDateM2(e){
        if(e){
            this.setState({fechaM2: e})
        }
    }
    onChangeDateM3(e){
        if(e){
            this.setState({fechaM3: e})
        }
    }
    onChangeDateM4(e){
        if(e){
            this.setState({fechaM4: e})
        }
    }
    onChangeDateM5(e){
        if(e){
            this.setState({fechaM5: e})
        }
    }
    onChangeDateM6(e){
        if(e){
            this.setState({fechaM6: e})
        }
    }
    onChangeDateM7(e){
        if(e){
            this.setState({fechaM7: e})
        }
    }
    onChangeDateM8(e){
        if(e){
            this.setState({fechaM8: e})
        }
    }
    onChangeDateM9(e){
        if(e){
            this.setState({fechaM9: e})
        }
    }
    onChangeDateM10(e){
        if(e){
            this.setState({fechaM10: e})
        }
    }
    onChangeInputM1(e){
        this.setState({inputM1:e.target.value})
    }
    onChangeInputM2(e){
        this.setState({inputM2:e.target.value})
    }
    onChangeInputM3(e){
        this.setState({inputM3:e.target.value})
    }
    onChangeInputM4(e){
        this.setState({inputM4:e.target.value})
    }
    onChangeInputM5(e){
        this.setState({inputM5:e.target.value})
    }
    onChangeInputM6(e){
        this.setState({inputM6:e.target.value})
    }
    onChangeInputM7(e){
        this.setState({inputM7:e.target.value})
    }
    onChangeInputM8(e){
        this.setState({inputM8:e.target.value})
    }
    onChangeInputM9(e){
        this.setState({inputM9:e.target.value})
    }
    onChangeInputM10(e){
        this.setState({inputM10:e.target.value})
    }
    onChangeInputM11(e){
        this.setState({inputM11:e.target.value})
    }
    onChangeInputM21(e){
        this.setState({inputM21:e.target.value})
    }
    onChangeInputM31(e){
        this.setState({inputM31:e.target.value})
    }
    onChangeInputM41(e){
        this.setState({inputM41:e.target.value})
    }
    onChangeInputM51(e){
        this.setState({inputM51:e.target.value})
    }
    onChangeInputM61(e){
        this.setState({inputM61:e.target.value})
    }
    onChangeInputM71(e){
        this.setState({inputM71:e.target.value})
    }
    onChangeInputM81(e){
        this.setState({inputM81:e.target.value})
    }
    onChangeInputM91(e){
        this.setState({inputM91:e.target.value})
    }
    onChangeInputM101(e){
        this.setState({inputM101:e.target.value})
    }
    onChangeInputM111(e){
        this.setState({inputM111:e.target.value})
    }
    onChangeInputM211(e){
        this.setState({inputM211:e.target.value})
    }
    onChangeInputM311(e){
        this.setState({inputM311:e.target.value})
    }
    onChangeInputM411(e){
        this.setState({inputM411:e.target.value})
    }
    onChangeInputM511(e){
        this.setState({inputM511:e.target.value})
    }
    onChangeInputM611(e){
        this.setState({inputM611:e.target.value})
    }
    onChangeInputM711(e){
        this.setState({inputM711:e.target.value})
    }
    onChangeInputM811(e){
        this.setState({inputM811:e.target.value})
    }
    onChangeInputM911(e){
        this.setState({inputM911:e.target.value})
    }
    onChangeInputM1011(e){
        this.setState({inputM1011:e.target.value})
    }

    onChangeDateG1(e){
        if(e){
            this.setState({fechaG1: e})
        }
    }
    
    onChangeDateG2(e){
        if(e){
            this.setState({fechaG2: e})
        }
    }
    onChangeDateG3(e){
        if(e){
            this.setState({fechaG3: e})
        }
    }
    onChangeDateG4(e){
        if(e){
            this.setState({fechaG4: e})
        }
    }
    onChangeDateG5(e){
        if(e){
            this.setState({fechaG5: e})
        }
    }
    onChangeDateG6(e){
        if(e){
            this.setState({fechaG6: e})
        }
    }
    onChangeDateG7(e){
        if(e){
            this.setState({fechaG7: e})
        }
    }
    onChangeDateG8(e){
        if(e){
            this.setState({fechaG8: e})
        }
    }
    onChangeDateG9(e){
        if(e){
            this.setState({fechaG9: e})
        }
    }
    onChangeDateG10(e){
        if(e){
            this.setState({fechaG10: e})
        }
    }
    onChangeInputG1(e){
        this.setState({inputG1:e.target.value})
    }
    onChangeInputG2(e){
        this.setState({inputG2:e.target.value})
    }
    onChangeInputG3(e){
        this.setState({inputG3:e.target.value})
    }
    onChangeInputG4(e){
        this.setState({inputG4:e.target.value})
    }
    onChangeInputG5(e){
        this.setState({inputG5:e.target.value})
    }
    onChangeInputG6(e){
        this.setState({inputG6:e.target.value})
    }
    onChangeInputG7(e){
        this.setState({inputG7:e.target.value})
    }
    onChangeInputG8(e){
        this.setState({inputG8:e.target.value})
    }
    onChangeInputG9(e){
        this.setState({inputG9:e.target.value})
    }
    onChangeInputG10(e){
        this.setState({inputG10:e.target.value})
    }
    onChangeInputG11(e){
        this.setState({inputG11:e.target.value})
    }
    onChangeInputG21(e){
        this.setState({inputG21:e.target.value})
    }
    onChangeInputG31(e){
        this.setState({inputG31:e.target.value})
    }
    onChangeInputG41(e){
        this.setState({inputG41:e.target.value})
    }
    onChangeInputG51(e){
        this.setState({inputG51:e.target.value})
    }
    onChangeInputG61(e){
        this.setState({inputG61:e.target.value})
    }
    onChangeInputG71(e){
        this.setState({inputG71:e.target.value})
    }
    onChangeInputG81(e){
        this.setState({inputG81:e.target.value})
    }
    onChangeInputG91(e){
        this.setState({inputG91:e.target.value})
    }
    onChangeInputG101(e){
        this.setState({inputG101:e.target.value})
    }

    onChangeDateI(e){
        if(e){
            this.setState({fechaI: e})
        }
    }
    onChangeDateFinal(e){
        if(e){
            this.setState({fechaF: e})
        }
    }
    next1(){
        let cliente = this.state.cliente;
        let orden = this.state.orden;
        let descripcion = this.state.descripcion;
        let fechaI = this.state.fechaI.$d;
        let fechaF = this.state.fechaF.$d;
   
        if(cliente && orden && descripcion){
            if(fechaI && fechaF){
                this.setState({cardInicial:false})
                this.setState({cardCostos:true}) 
            }else{
                swal.fire(
                    'Notificación!',
                    'Ingrese una fecha válida',
                    'warning'
                )
            }
        }else{
            swal.fire(
                'Aviso',
                'Llene correctamente los campos "Cliente, Orden y Descripción"',
                'warning'
            )
        }

    }
    regresar(){
       window.location.reload()
    }
    partida1(){
        this.setState({partida2:true})
        this.setState({disabledButton1:true})
    }
    partida2(){
        this.setState({partida3:true})
        this.setState({disabledButton2:true})

    }
    partida3(){
        this.setState({partida4:true})
        this.setState({disabledButton3:true})

    }
    partida4(){
        this.setState({partida5:true})
        this.setState({disabledButton4:true})

    }
    partida5(){
        this.setState({partida6:true})
        this.setState({disabledButton5:true})

    }
    partida6(){
        this.setState({partida7:true})
        this.setState({disabledButton6:true})
    }
    partida7(){
        this.setState({partida8:true})
        this.setState({disabledButton7:true})

    }
    partida8(){
        this.setState({partida9:true})
        this.setState({disabledButton8:true})

    }
    partida9(){
        this.setState({partida10:true})
        this.setState({disabledButton9:true})

    }

    partidaM1(){
        this.setState({partidaM2:true})
        this.setState({disabledButtonM1:true})
    }
    partidaM2(){
        this.setState({partidaM3:true})
        this.setState({disabledButtonM2:true})

    }
    partidaM3(){
        this.setState({partidaM4:true})
        this.setState({disabledButtonM3:true})

    }
    partidaM4(){
        this.setState({partidaM5:true})
        this.setState({disabledButtonM4:true})

    }
    partidaM5(){
        this.setState({partidaM6:true})
        this.setState({disabledButtonM5:true})

    }
    partidaM6(){
        this.setState({partidaM7:true})
        this.setState({disabledButtonM6:true})
    }
    partidaM7(){
        this.setState({partidaM8:true})
        this.setState({disabledButtonM7:true})

    }
    partidaM8(){
        this.setState({partidaM9:true})
        this.setState({disabledButtonM8:true})

    }
    partidaM9(){
        this.setState({partidaM10:true})
        this.setState({disabledButtonM9:true})

    }

    
    partidaG1(){
        this.setState({partidaG2:true})
        this.setState({disabledButtonG1:true})
    }
    partidaG2(){
        this.setState({partidaG3:true})
        this.setState({disabledButtonG2:true})

    }
    partidaG3(){
        this.setState({partidaG4:true})
        this.setState({disabledButtonG3:true})

    }
    partidaG4(){
        this.setState({partidaG5:true})
        this.setState({disabledButtonG4:true})

    }
    partidaG5(){
        this.setState({partidaG6:true})
        this.setState({disabledButtonG5:true})

    }
    partidaG6(){
        this.setState({partidaG7:true})
        this.setState({disabledButtonG6:true})
    }
    partidaG7(){
        this.setState({partidaG8:true})
        this.setState({disabledButtonG7:true})

    }
    partidaG8(){
        this.setState({partidaG9:true})
        this.setState({disabledButtonG8:true})

    }
    partidaG9(){
        this.setState({partidaG10:true})
        this.setState({disabledButtonG9:true})

    }
    generarAnalisis(){
        window.scrollTo(0, 0)
        this.setState({cardCostos:false})
        this.setState({cardInicial:false})
        this.setState({cardAnalisis:true})
        this.setState({buttonCancelar:true})
        let arrayMaterialesDirectos = [];
        let arrayManoDeObra = [];
        let arrayGastos = []; 
        if(this.state.input1 && this.state.fecha1 && this.state.input11){
            arrayMaterialesDirectos.push({"fecha":this.state.fecha1.$d,"requisicion":this.state.input1,"costo":this.state.input11})
            if(this.state.input2 && this.state.fecha2 && this.state.input21){
                arrayMaterialesDirectos.push({"fecha":this.state.fecha2.$d,"requisicion":this.state.input2,"costo":this.state.input21})
                if(this.state.input3 && this.state.fecha3 && this.state.input31){
                    arrayMaterialesDirectos.push({"fecha":this.state.fecha3.$d,"requisicion":this.state.input3,"costo":this.state.input31})
                    if(this.state.input4 && this.state.fecha4 && this.state.input41){
                        arrayMaterialesDirectos.push({"fecha":this.state.fecha4.$d,"requisicion":this.state.input4,"costo":this.state.input41})
                        if(this.state.input5 && this.state.fecha5 && this.state.input51){
                            arrayMaterialesDirectos.push({"fecha":this.state.fecha5.$d,"requisicion":this.state.input5,"costo":this.state.input51})
                            if(this.state.input6 && this.state.fecha6 && this.state.input61){
                                arrayMaterialesDirectos.push({"fecha":this.state.fecha6.$d,"requisicion":this.state.input6,"costo":this.state.input61})
                                if(this.state.input7 && this.state.fecha7 && this.state.input71){
                                    arrayMaterialesDirectos.push({"fecha":this.state.fecha7.$d,"requisicion":this.state.input7,"costo":this.state.input71})
                                    if(this.state.input8 && this.state.fecha8 && this.state.input81){
                                        arrayMaterialesDirectos.push({"fecha":this.state.fecha8.$d,"requisicion":this.state.input8,"costo":this.state.input81})
                                        if(this.state.input9 && this.state.fecha9 && this.state.input91){
                                            arrayMaterialesDirectos.push({"fecha":this.state.fecha9.$d,"requisicion":this.state.input9,"costo":this.state.input91})
                                            if(this.state.input10 && this.state.fecha10 && this.state.input101){
                                                arrayMaterialesDirectos.push({"fecha":this.state.fecha10.$d,"requisicion":this.state.input10,"costo":this.state.input101})
                                            }
                                        }
                                    }
                                }
                            }
                        } 
                    }
                }
            }
        }

        if(this.state.inputM1 && this.state.fechaM1 && this.state.inputM11 && this.state.inputM111){
            arrayManoDeObra.push({"fechaM":this.state.fechaM1.$d,"tarjeta":this.state.inputM1,"horas":this.state.inputM11,"tasa":this.state.inputM111 ,"costo":(this.state.inputM11 * this.state.inputM111)})
            if(this.state.inputM2 && this.state.fechaM2 && this.state.inputM21 && this.state.inputM211){
                arrayManoDeObra.push({"fechaM":this.state.fechaM2.$d,"tarjeta":this.state.inputM2,"horas":this.state.inputM21,"tasa":this.state.inputM211,"costo":(this.state.inputM21 * this.state.inputM211)})
                if(this.state.inputM3 && this.state.fechaM3 && this.state.inputM31 && this.state.inputM311){
                    arrayManoDeObra.push({"fechaM":this.state.fechaM3.$d,"tarjeta":this.state.inputM3,"horas":this.state.inputM31,"tasa":this.state.inputM311,"costo":(this.state.inputM31 * this.state.inputM311)})
                    if(this.state.inputM4 && this.state.fechaM4 && this.state.inputM41 && this.state.inputM411){
                        arrayManoDeObra.push({"fechaM":this.state.fechaM4.$d,"tarjeta":this.state.inputM4,"horas":this.state.inputM41,"tasa":this.state.inputM411,"costo":(this.state.inputM41 * this.state.inputM411)})
                        if(this.state.inputM5 && this.state.fechaM5 && this.state.inputM51 && this.state.inputM511){
                            arrayManoDeObra.push({"fechaM":this.state.fechaM5.$d,"tarjeta":this.state.inputM5,"horas":this.state.inputM51,"tasa":this.state.inputM511,"costo":(this.state.inputM51 * this.state.inputM511)})
                            if(this.state.inputM6 && this.state.fechaM6 && this.state.inputM61 && this.state.inputM611){
                                arrayManoDeObra.push({"fechaM":this.state.fechaM6.$d,"tarjeta":this.state.inputM6,"horas":this.state.inputM61,"tasa":this.state.inputM611,"costo":(this.state.inputM61 * this.state.inputM611)})
                                if(this.state.inputM7 && this.state.fechaM7 && this.state.inputM71 && this.state.inputM711){
                                    arrayManoDeObra.push({"fechaM":this.state.fechaM7.$d,"tarjeta":this.state.inputM7,"horas":this.state.inputM71,"tasa":this.state.inputM711,"costo":(this.state.inputM71 * this.state.inputM711)})
                                    if(this.state.inputM8 && this.state.fechaM8 && this.state.inputM81 && this.state.inputM811){
                                        arrayManoDeObra.push({"fechaM":this.state.fechaM8.$d,"tarjeta":this.state.inputM8,"horas":this.state.inputM81,"tasa":this.state.inputM811,"costo":(this.state.inputM81 * this.state.inputM811)})
                                        if(this.state.inputM9 && this.state.fechaM9 && this.state.inputM91 && this.state.inputM911){
                                            arrayManoDeObra.push({"fechaM":this.state.fechaM9.$d,"tarjeta":this.state.inputM9,"horas":this.state.inputM91,"tasa":this.state.inputM911,"costo":(this.state.inputM91 * this.state.inputM911)})
                                            if(this.state.inputM10 && this.state.fechaM10 && this.state.inputM101 && this.state.inputM1011){
                                                arrayManoDeObra.push({"fechaM":this.state.fechaM10.$d,"tarjeta":this.state.inputM10,"horas":this.state.inputM101,"tasa":this.state.inputM1011,"costo":(this.state.inputM101 * this.state.inputM1011)})
                                            }
                                        }
                                    }
                                }
                            }
                        } 
                    }
                }
            }
        }

        if(this.state.inputG1 && this.state.fechaG1 && this.state.inputG11){
            arrayGastos.push({"fechaG":this.state.fechaG1.$d,"horas":this.state.inputG1,"tasa":this.state.inputG11 ,"costo":(this.state.inputG1 * this.state.inputG11)})
            if(this.state.inputG2 && this.state.fechaG2 && this.state.inputG21){
                arrayGastos.push({"fechaG":this.state.fechaG2.$d,"horas":this.state.inputG2,"tasa":this.state.inputG21,"costo":(this.state.inputG2 * this.state.inputG21)})
                if(this.state.inputG3 && this.state.fechaG3 && this.state.inputG31){
                    arrayGastos.push({"fechaG":this.state.fechaG3.$d,"horas":this.state.inputG3,"tasa":this.state.inputG31,"costo":(this.state.inputG3 * this.state.inputG31)})
                    if(this.state.inputG4 && this.state.fechaG4 && this.state.inputG41){
                        arrayGastos.push({"fechaG":this.state.fechaG4.$d,"horas":this.state.inputG4,"tasa":this.state.inputG41,"costo":(this.state.inputG4 * this.state.inputG41)})
                        if(this.state.inputG5 && this.state.fechaG5 && this.state.inputG51){
                            arrayGastos.push({"fechaG":this.state.fechaG5.$d,"horas":this.state.inputG5,"tasa":this.state.inputG51,"costo":(this.state.inputG5 * this.state.inputG51)})
                            if(this.state.inputG6 && this.state.fechaG6 && this.state.inputG61){
                                arrayGastos.push({"fechaG":this.state.fechaG6.$d,"horas":this.state.inputG6,"tasa":this.state.inputG61,"costo":(this.state.inputG6 * this.state.inputG61)})
                                if(this.state.inputG7 && this.state.fechaG7 && this.state.inputG71){
                                    arrayGastos.push({"fechaG":this.state.fechaG7.$d,"horas":this.state.inputG7,"tasa":this.state.inputG71,"costo":(this.state.inputG7 * this.state.inputG71)})
                                    if(this.state.inputG8 && this.state.fechaG8 && this.state.inputG81){
                                        arrayGastos.push({"fechaG":this.state.fechaG8.$d,"horas":this.state.inputG8,"tasa":this.state.inputG81,"costo":(this.state.inputG8 * this.state.inputG81)})
                                        if(this.state.inputG9 && this.state.fechaG9 && this.state.inputG91){
                                            arrayGastos.push({"fechaG":this.state.fechaG9.$d,"horas":this.state.inputG9,"tasa":this.state.inputG91,"costo":(this.state.inputG9 * this.state.inputG91)})
                                            if(this.state.inputG10 && this.state.fechaG10 && this.state.inputG101){
                                                arrayGastos.push({"fechaG":this.state.fechaG10.$d,"horas":this.state.inputG10,"tasa":this.state.inputG101,"costo":(this.state.inputG10 * this.state.inputG101)})
                                            }
                                        }
                                    }
                                }
                            }
                        } 
                    }
                }
            }
        }

        
        if(arrayMaterialesDirectos[0]){
            this.setState({arrayMaterialesDirectos:arrayMaterialesDirectos})
        }else{
                swal.fire(
                    'Notificación!',
                    'Seleccione al menos una partida de Materiales directos',
                    'warning'
                )
        }
        if(arrayManoDeObra[0]){
            this.setState({arrayManoDeObra:arrayManoDeObra})
        }else{
                swal.fire(
                    'Notificación!',
                    'Seleccione al menos una partida de Mano de obra',
                    'warning'
                )
        }
        if(arrayGastos[0]){
            this.setState({arrayGastos:arrayGastos})
        }else{
                swal.fire(
                    'Notificación!',
                    'Seleccione al menos una partida de Gastos indirectos',
                    'warning'
                )
        }
        const sum = arrayMaterialesDirectos.reduce((acc, o) => acc + parseInt(o.costo), 0)
        this.setState({costoTotalMaterialesDirectos:sum})
        const sum2 = arrayManoDeObra.reduce((acc, o) => acc + parseInt(o.costo), 0)
        this.setState({costoTotalManoDeObra:sum2})
        const sum3 = arrayGastos.reduce((acc, o) => acc + parseInt(o.costo), 0)
        this.setState({costoTotalarrayGastos:sum3})
    }
    adjuntarLogo(){
        this.setState({isModalVisible:true})
    }
    export(){
        this.pdfExportComponent.save()
    }
    render() { 
        const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
        let buttonCancelar;
        if(this.state.buttonCancelar === true){
            buttonCancelar = <button style={{marginTop:"3%"}} class="button-21" onClick={e=>this.regresar()}>Cancelar análisis</button>
        }
        let cardInicial;
        let cardCostos;
        if(this.state.cardInicial === true){
            cardInicial = 
                <Card style={{width:"50%",marginTop:"2%"}} title={<h6><sytong>Ingrese los datos generales</sytong></h6>} extra = {<strong>{this.state.fechaActual}</strong>}>
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td  class="row_table">Empresa:</td>
                            <td><Input onChange={this.onChangeClient} placeholder="Nombre del cliente" /></td>
                        </tr>
                        <tr>
                            <td  class="row_table">Orden número</td>
                            <td><Input onChange={this.onChangeOrder} type='number' placeholder="# Orden" /></td>
                        </tr>
                        <tr>
                            <td  class="row_table">Descripción</td>
                            <td><Input onChange={this.onChangeDescription} placeholder="Descripción general" /></td>
                        </tr>
                        <tr>
                            <td  class="row_table">Cantidad</td>
                            <td><Input onChange={this.onChangeCantidad} placeholder="Cantidad" /></td>
                        </tr>
                        <tr>
                            <td  class="row_table">Fecha de inicio</td>
                            <td><DatePicker onChange={this.onChangeDateI} defaultValue={moment(new Date())} format={dateFormatList[0]}  /></td>
                        </tr>
                        <tr>
                            <td  class="row_table">Fecha de terminación</td>
                            <td><DatePicker onChange={this.onChangeDateFinal} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                        </tr>
                    </table>
                    <center>
                    <button style={{width:"30%",marginTop:"2%"}} class="button-70" icon={<FunctionOutlined />}  onClick={e=>this.next1()}>Siguiente</button>
                    </center>
                </Card>
        }
        if(this.state.cardCostos === true){
            let table1 = 
            <table className='table table-borderless table table-small table table-striped'>
                <tr>
                    <td style={{paddingTop:"2px",paddingBottom:"2px"}}  class="row_table">Fecha</td>
                    <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Requis</td>
                    <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                    <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                </tr>
                <tr>
                    <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDate1} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                    <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInput1} type='number' placeholder='Num. requisición'/></td>
                    <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' onChange={this.onChangeInput11} type='number' placeholder='Costo'/></td>
                    <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida1()} disabled = {this.state.disabledButton1}>+</Button></td>
                    {/* <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida1()}>-</Button></td> */}
                </tr>
            </table>
            let table2; 
            let table3; 
            let table4; 
            let table5; 
            let table6; 
            let table7; 
            let table8; 
            let table9; 
            let table10; 
            
            if(this.state.partida2 === true){
                table2 =
                <table className='table table-borderless table table-small table table-striped'>
                    <tr>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}}  class="row_table">Fecha</td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Requis</td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                    </tr>
                    <tr>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDate2} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInput2} type='number' placeholder='Num. requisición'/></td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' onChange={this.onChangeInput21} type='number' placeholder='Costo'/></td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida2()} disabled = {this.state.disabledButton2}>+</Button></td>
                    </tr>
                </table>
            }
            if(this.state.partida3 === true){
                table3 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}}  class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Requis</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDate3} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInput3} type='number' placeholder='Num. requisición'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' onChange={this.onChangeInput31} type='number'  placeholder='Costo'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida3()} disabled = {this.state.disabledButton3}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partida4 === true){
                table4 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}}  class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Requis</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDate4} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInput4} type='number' placeholder='Num. requisición'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' onChange={this.onChangeInput41} type='number' placeholder='Costo'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida4()} disabled = {this.state.disabledButton4}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partida5 === true){
                table5 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}}  class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Requis</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDate5} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInput5} type='number' placeholder='Num. requisición'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' onChange={this.onChangeInput51} type='number' placeholder='Costo'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida5()} disabled = {this.state.disabledButton5}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partida6 === true){
                table6 =
                    <table className='table table-borderless table table-small table table-striped'>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}}  class="row_table">Fecha</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Requis</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDate6} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInput6} type='number' placeholder='Num. requisición'/></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' onChange={this.onChangeInput61} type='number' placeholder='Costo'/></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida6()} disabled = {this.state.disabledButton6}>+</Button></td>
                            </tr>
                    </table>
            }
            if(this.state.partida7 === true){
                table7 =
                    <table className='table table-borderless table table-small table table-striped'>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}}  class="row_table">Fecha</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Requis</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDate7} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInput7} type='number' placeholder='Num. requisición'/></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' onChange={this.onChangeInput71} type='number' placeholder='Costo'/></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida7()} disabled = {this.state.disabledButton7}>+</Button></td>
                            </tr>
                    </table>
            }
            if(this.state.partida8 === true){
                table8 =
                    <table className='table table-borderless table table-small table table-striped'>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}}  class="row_table">Fecha</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Requis</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDate8} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInput8} type='number' placeholder='Num. requisición'/></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' onChange={this.onChangeInput81} type='number' placeholder='Costo'/></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida8()} disabled = {this.state.disabledButton8}>+</Button></td>
                            </tr>
            
                    </table>
            }
            if(this.state.partida9 === true){
                table9 =
                    <table className='table table-borderless table table-small table table-striped'>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}}  class="row_table">Fecha</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Requis</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDate9} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInput9} type='number' placeholder='Num. requisición'/></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' onChange={this.onChangeInput91} type='number' placeholder='Costo'/></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida9()} disabled = {this.state.disabledButton9}>+</Button></td>
                            </tr>
                    </table>
            }
            if(this.state.partida10 === true){
                table10 =
                    <table className='table table-borderless table table-small table table-striped'>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}}  class="row_table">Fecha</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Requis</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDate10} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInput10} type='number' placeholder='Num. requisición'/></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' onChange={this.onChangeInput101} type='number' placeholder='Costo'/></td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partida9()} disabled = {this.state.disabledButton9}>x</Button></td>
                            </tr>
                    </table>
            }
            let value1;
            let value2;
            let value3;
            let value4;
            let value5;
            let value6;
            let value7;
            let value8;
            let value9;
            let value10;

            if(this.state.input11){
                value1 = parseInt(this.state.input11)
            }else{
                value1 = 0
            }
            if(this.state.input21){
                value2 = parseInt(this.state.input21)
            }else{
                value2 = 0
            }
            if(this.state.input31){
                value3 = parseInt(this.state.input31)
            }else{
                value3 = 0
            }
            if(this.state.input41){
                value4 = parseInt(this.state.input41)
            }else{
                value4 = 0
            }
            if(this.state.input51){
                value5 = parseInt(this.state.input51)
            }else{
                value5 = 0
            }
            if(this.state.input61){
                value6 = parseInt(this.state.input61)
            }else{
                value6 = 0
            }
            if(this.state.input71){
                value7 = parseInt(this.state.input71)
            }else{
                value7 = 0
            }
            if(this.state.input81){
                value8 = parseInt(this.state.input81)
            }else{
                value8 = 0
            }
            if(this.state.input91){
                value9 = parseInt(this.state.input91)
            }else{
                value9 = 0
            }
            if(this.state.input101){
                value10 = parseInt(this.state.input101)
            }else{
                value10 = 0
            }

            let valueM11;
            let valueM111;
            let valueM21;
            let valueM211;
            let valueM31;
            let valueM311;
            let valueM41;
            let valueM411;
            let valueM51;
            let valueM511;
            let valueM61;
            let valueM611;
            let valueM71;
            let valueM711;
            let valueM81;
            let valueM811;
            let valueM91;
            let valueM911;
            let valueM101;
            let valueM1011;

            let valueG1;
            let valueG11;
            let valueG2;
            let valueG21;
            let valueG3;
            let valueG31;
            let valueG4;
            let valueG41;
            let valueG5;
            let valueG51;
            let valueG6;
            let valueG61;
            let valueG7;
            let valueG71;
            let valueG8;
            let valueG81;
            let valueG9;
            let valueG91;
            let valueG10;
            let valueG101;
            if(this.state.inputM11){
                valueM11 = parseInt(this.state.inputM11)
            }else{
                valueM11 = 0
            }
            if(this.state.inputM111){
                valueM111 = parseInt(this.state.inputM111)
            }else{
                valueM111 = 0
            }
            if(this.state.inputM21){
                valueM21 = parseInt(this.state.inputM21)
            }else{
                valueM21 = 0
            }
            if(this.state.inputM211){
                valueM211 = parseInt(this.state.inputM211)
            }else{
                valueM211 = 0
            }
            if(this.state.inputM31){
                valueM31 = parseInt(this.state.inputM31)
            }else{
                valueM31 = 0
            }
            if(this.state.inputM311){
                valueM311 = parseInt(this.state.inputM311)
            }else{
                valueM311 = 0
            }
            if(this.state.inputM41){
                valueM41 = parseInt(this.state.inputM41)
            }else{
                valueM41 = 0
            }
            if(this.state.inputM411){
                valueM411 = parseInt(this.state.inputM411)
            }else{
                valueM411 = 0
            }
            if(this.state.inputM51){
                valueM51 = parseInt(this.state.inputM51)
            }else{
                valueM51 = 0
            }
            if(this.state.inputM511){
                valueM511 = parseInt(this.state.inputM511)
            }else{
                valueM511 = 0
            }
            if(this.state.inputM61){
                valueM61 = parseInt(this.state.inputM61)
            }else{
                valueM61 = 0
            }
            if(this.state.inputM611){
                valueM611 = parseInt(this.state.inputM611)
            }else{
                valueM611 = 0
            }
            if(this.state.inputM71){
                valueM71 = parseInt(this.state.inputM71)
            }else{
                valueM71 = 0
            }
            if(this.state.inputM711){
                valueM711 = parseInt(this.state.inputM711)
            }else{
                valueM711 = 0
            }
            if(this.state.inputM81){
                valueM81 = parseInt(this.state.inputM81)
            }else{
                valueM81 = 0
            }
            if(this.state.inputM811){
                valueM811 = parseInt(this.state.inputM811)
            }else{
                valueM811 = 0
            }
            if(this.state.inputM91){
                valueM91 = parseInt(this.state.inputM91)
            }else{
                valueM91 = 0
            }
            if(this.state.inputM911){
                valueM911 = parseInt(this.state.inputM911)
            }else{
                valueM911 = 0
            }
            if(this.state.inputM101){
                valueM101 = parseInt(this.state.inputM101)
            }else{
                valueM101 = 0
            }
            if(this.state.inputM1011){
                valueM1011 = parseInt(this.state.inputM1011)
            }else{
                valueM1011 = 0
            }

            if(this.state.inputG1){
                valueG1 = parseInt(this.state.inputG1)
            }else{
                valueG1 = 0
            }
            if(this.state.inputG11){
                valueG11 = parseInt(this.state.inputG11)
            }else{
                valueG11 = 0
            }
            if(this.state.inputG2){
                valueG2 = parseInt(this.state.inputG2)
            }else{
                valueG2 = 0
            }
            if(this.state.inputG21){
                valueG21 = parseInt(this.state.inputG21)
            }else{
                valueG21 = 0
            }
            if(this.state.inputG3){
                valueG3 = parseInt(this.state.inputG3)
            }else{
                valueG3 = 0
            }
            if(this.state.inputG31){
                valueG31 = parseInt(this.state.inputG31)
            }else{
                valueG31 = 0
            }
            if(this.state.inputG4){
                valueG4 = parseInt(this.state.inputG4)
            }else{
                valueG4 = 0
            }
            if(this.state.inputG41){
                valueG41 = parseInt(this.state.inputG41)
            }else{
                valueG41 = 0
            }
            if(this.state.inputG5){
                valueG5 = parseInt(this.state.inputG5)
            }else{
                valueG5 = 0
            }
            if(this.state.inputG51){
                valueG51 = parseInt(this.state.inputG51)
            }else{
                valueG51 = 0
            }
            if(this.state.inputG6){
                valueG6 = parseInt(this.state.inputG6)
            }else{
                valueG6 = 0
            }
            if(this.state.inputG61){
                valueG61 = parseInt(this.state.inputG61)
            }else{
                valueG61 = 0
            }
            if(this.state.inputG7){
                valueG7 = parseInt(this.state.inputG7)
            }else{
                valueG7 = 0
            }
            if(this.state.inputG71){
                valueG71 = parseInt(this.state.inputG71)
            }else{
                valueG71 = 0
            }
            if(this.state.inputG8){
                valueG8 = parseInt(this.state.inputG8)
            }else{
                valueG8 = 0
            }
            if(this.state.inputG81){
                valueG81 = parseInt(this.state.inputG81)
            }else{
                valueG81 = 0
            }
            if(this.state.inputG9){
                valueG9 = parseInt(this.state.inputG9)
            }else{
                valueG9 = 0
            }
            if(this.state.inputG91){
                valueG91 = parseInt(this.state.inputG91)
            }else{
                valueG91 = 0
            }
            if(this.state.inputG10){
                valueG10 = parseInt(this.state.inputG10)
            }else{
                valueG10 = 0
            }
            if(this.state.inputG101){
                valueG101 = parseInt(this.state.inputG101)
            }else{
                valueG101 = 0
            }
            let totalM11 = (valueM11 * valueM111)
            let totalM21 = (valueM21 * valueM211)
            let totalM31 = (valueM31 * valueM311)
            let totalM41 = (valueM41 * valueM411)
            let totalM51 = (valueM51 * valueM511)
            let totalM61 = (valueM61 * valueM611)
            let totalM71 = (valueM71 * valueM711)
            let totalM81 = (valueM81 * valueM811)
            let totalM91 = (valueM91 * valueM911)
            let totalM101 = (valueM101 * valueM1011)

            let totalG1 = (valueG1 * valueG11)
            let totalG2 = (valueG2 * valueG21)
            let totalG3 = (valueG3 * valueG31)
            let totalG4 = (valueG4 * valueG41)
            let totalG5 = (valueG5 * valueG51)
            let totalG6 = (valueG6 * valueG61)
            let totalG7 = (valueG7 * valueG71)
            let totalG8 = (valueG8 * valueG81)
            let totalG9 = (valueG9 * valueG91)
            let totalG10 = (valueG10 * valueG101)

            let tableM1 = 
                <table className='table table-borderless table table-small table table-striped'>
                    <tr>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Tarjeta</td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                    </tr>
                    <tr>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateM1} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM1} type='number' placeholder='Num. Tarjeta'/></td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM11} type='number' placeholder='Horas'/></td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM111} type='number' placeholder='Tasa'/></td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalM11} disabled/></td>
                        <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaM1()} disabled = {this.state.disabledButtonM1}>+</Button></td>
                    </tr>
                </table>

            let tableM2; 
            let tableM3; 
            let tableM4; 
            let tableM5;    
            let tableM6; 
            let tableM7; 
            let tableM8; 
            let tableM9; 
            let tableM10;

            let tableG2; 
            let tableG3; 
            let tableG4; 
            let tableG5;    
            let tableG6; 
            let tableG7; 
            let tableG8; 
            let tableG9; 
            let tableG10; 
            if(this.state.partidaM2 === true){
                tableM2 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Tarjeta</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateM2} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM2} type='number' placeholder='Num. Tarjeta'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM21} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM211} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalM21} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaM2()} disabled = {this.state.disabledButtonM2}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaM3 === true){
                tableM3 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Tarjeta</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateM3} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM3} type='number' placeholder='Num. Tarjeta'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM31} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM311} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalM31} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaM3()} disabled = {this.state.disabledButtonM3}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaM4 === true){
                tableM4 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Tarjeta</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateM4} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM4} type='number' placeholder='Num. Tarjeta'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM41} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM411} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalM41} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaM4()} disabled = {this.state.disabledButtonM4}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaM5 === true){
                tableM5 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Tarjeta</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateM5} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM5} type='number' placeholder='Num. Tarjeta'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM51} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM511} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalM51} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaM5()} disabled = {this.state.disabledButtonM5}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaM6 === true){
                tableM6 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Tarjeta</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateM6} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM6} type='number' placeholder='Num. Tarjeta'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM61} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM611} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalM61} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaM6()} disabled = {this.state.disabledButtonM6}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaM7 === true){
                tableM7 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Tarjeta</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateM7} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM7} type='number' placeholder='Num. Tarjeta'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM71} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM711} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input  className='strong' value={totalM71} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaM7()} disabled = {this.state.disabledButtonM7}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaM8 === true){
                tableM8 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Tarjeta</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateM8} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM8} type='number' placeholder='Num. Tarjeta'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM81} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM811} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalM81} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaM8()} disabled = {this.state.disabledButtonM8}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaM9 === true){
                tableM9 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Tarjeta</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateM9} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM9} type='number' placeholder='Num. Tarjeta'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM91} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM911} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalM91} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaM9()} disabled = {this.state.disabledButtonM9}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaM10 === true){
                tableM10 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">N.Tarjeta</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateM10} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM10} type='number' placeholder='Num. Tarjeta'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM101} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputM1011} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalM101} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle'  disabled>x</Button></td>
                        </tr>
                    </table>
            }
           
            let tableG1 = 
                <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>
                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateG1} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG1} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG11} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalG1} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaG1()} disabled = {this.state.disabledButtonG1}>+</Button></td>
                        </tr>
                </table>
            if(this.state.partidaG2 === true){
                tableG2 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateG2} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG2} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG21} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalG2} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaG2()} disabled = {this.state.disabledButtonG2}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaG3 === true){
                tableG3 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateG3} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG3} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG31} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalG3} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaG3()} disabled = {this.state.disabledButtonG3}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaG4 === true){
                tableG4 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateG4} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG4} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG41} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalG4} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaG4()} disabled = {this.state.disabledButtonG4}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaG5 === true){
                tableG5 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateG5} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG5} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG51} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalG5} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaG5()} disabled = {this.state.disabledButtonG5}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaG6 === true){
                tableG6 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateG6} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG6} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG61} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input  className='strong' value={totalG6} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaG6()} disabled = {this.state.disabledButtonG6}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaG7 === true){
                tableG7 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateG7} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG7} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG71} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalG7} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaG7()} disabled = {this.state.disabledButtonG7}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaG8 === true){
                tableG8 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateG8} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG8} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG81} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalG8} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaG8()} disabled = {this.state.disabledButtonG8}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaG9 === true){
                tableG9 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateG9} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG9} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG91} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalG9} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' onClick={e=> this.partidaG9()} disabled = {this.state.disabledButtonG9}>+</Button></td>
                        </tr>
                    </table>
            }
            if(this.state.partidaG10 === true){
                tableG10 =
                    <table className='table table-borderless table table-small table table-striped'>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Fecha</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Horas</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Tasa</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costo</td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"></td>

                        </tr>
                        <tr>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><DatePicker onChange={this.onChangeDateG10} defaultValue={moment(new Date())} format={dateFormatList} /></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG10} type='number' placeholder='Horas'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input onChange={this.onChangeInputG101} type='number' placeholder='Tasa'/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value={totalG10} disabled/></td>
                            <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Button type='primary' shape='circle' size='middle' disabled>x</Button></td>
                        </tr>
                    </table>
            }
            let costosTotales1 = parseInt(value1+value2+value3+value4+value5+value6+value7+value8+value9+value10+totalM11+totalM21+totalM31+totalM41+totalM51+totalM61+totalM71+totalM81+totalM91+totalM101+totalG1+totalG2+totalG3+totalG4+totalG5+totalG6+totalG7+totalG8+totalG9+totalG10);
            cardCostos = 
            <Card style={{width:"100%",marginTop:"2%"}} extra = {<button class="button-82-pushable" onClick={e=>this.regresar()} role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text">
            Cancelar
            </span>
            </button>}>
                <center><h6><sytong>Tabla de costos</sytong></h6></center>
                <Card title = {<div>
                    <label><strong>Cliente: </strong>{this.state.cliente}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label><strong>Orden: </strong>{this.state.orden}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label><strong>Descripción: </strong>{this.state.descripcion}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label><strong>Cantidad: </strong>{this.state.cantidad}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label><strong>Fecha Inicial: </strong>{this.state.fechaI.toString().substring(4,16)}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label><strong>Fecha Final: </strong>{this.state.fechaF.toString().substring(4,16)}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>} type='inner'extra = {<strong>{this.state.fechaActual}</strong>}>
                    <Card style={{width:"70%",marginTop:"2%"}} type='inner' title={<h6><strong>Materiales Directos</strong></h6>}>
                        {table1}
                        {table2}
                        {table3}
                        {table4}
                        {table5}
                        {table6}
                        {table7}
                        {table8}
                        {table9}
                        {table10}
                        <label><strong>COSTO TOTAL DE MATERIALES DIRECTOS : {value1+value2+value3+value4+value5+value6+value7+value8+value9+value10}</strong></label>
                    </Card>
                    <Card style={{width:"70%",marginTop:"2%"}}  type='inner' title={<h6><strong>Mano de obra directa</strong></h6>} >
                        {tableM1}
                        {tableM2}
                        {tableM3}
                        {tableM4}
                        {tableM5}
                        {tableM6}
                        {tableM7}
                        {tableM8}
                        {tableM9}
                        {tableM10}
                        <label><strong>COSTO TOTAL DE MANO DE OBRA: {totalM11+totalM21+totalM31+totalM41+totalM51+totalM61+totalM71+totalM81+totalM91+totalM101}</strong></label>
                    </Card>
                    <Card style={{width:"70%",marginTop:"2%"}} type='inner' title={<h6><strong>Gastos indirectos de fabricación</strong></h6>}>
                        {tableG1}
                        {tableG2}
                        {tableG3}
                        {tableG4}
                        {tableG5}
                        {tableG6}
                        {tableG7}
                        {tableG8}
                        {tableG9}
                        {tableG10}
                        <label><strong>COSTO TOTAL DE GASTOS INDIRECTOS: {totalG1+totalG2+totalG3+totalG4+totalG5+totalG6+totalG7+totalG8+totalG9+totalG10}</strong></label>

                    </Card>
                    <Card style={{width:"70%",marginTop:"2%"}} type='inner' title={<h6><strong>Resumen de costos</strong></h6>}>
                        <table className='table table-bordered table table-small table table-striped'>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Materiales directos</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value = {value1+value2+value3+value4+value5+value6+value7+value8+value9+value10} disabled/></td>
                            </tr>    
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Mano de obra directa</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value = {totalM11+totalM21+totalM31+totalM41+totalM51+totalM61+totalM71+totalM81+totalM91+totalM101} disabled/></td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Gastos indirectos de fabricación</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value = {totalG1+totalG2+totalG3+totalG4+totalG5+totalG6+totalG7+totalG8+totalG9+totalG10} disabled/></td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costos totales</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value = {value1+value2+value3+value4+value5+value6+value7+value8+value9+value10+totalM11+totalM21+totalM31+totalM41+totalM51+totalM61+totalM71+totalM81+totalM91+totalM101+totalG1+totalG2+totalG3+totalG4+totalG5+totalG6+totalG7+totalG8+totalG9+totalG10} disabled/></td>
                            </tr>
                            <tr>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table">Costos Unitario</td>
                                <td style={{paddingTop:"2px",paddingBottom:"2px"}} class="row_table"><Input className='strong' value = {(costosTotales1/parseInt(this.state.cantidad)).toFixed(2) || 0} disabled/></td>
                            </tr>
                        </table>
                    </Card>
                    <center><button style={{width:"30%",marginTop:"2%"}} class="button-70" onClick={e=> this.generarAnalisis()} >Generar analisis</button></center>
                </Card>

            </Card>
        }
        let modal = <Modal title = "Adjunta tu logo Berbi" visible = {this.state.isModalVisible} onOk={this.onOk} onCancel={this.onOk}>

        </Modal>
        let cardAnalisis;
        if(this.state.cardAnalisis === true){
            let costosTotales = parseInt(this.state.costoTotalMaterialesDirectos) + parseInt(this.state.costoTotalManoDeObra) +  parseInt(this.state.costoTotalarrayGastos)
            cardAnalisis = <Card headStyle={{ backgroundColor: '#0B8897', color: '#ffffff' }} extra={<div>{buttonCancelar}</div>} >
                <center><h6><strong>Generación de análisis de costos</strong></h6></center>
                <h6 className='labelText'><strong>N. de orden {this.state.orden}</strong></h6>
                <img className='imageLogo' src = {bg} width={"120px"} style={{marginTop:"5%",marginLeft:"2%"}}/>
                <center><Button type='primary' style={{width:"40%"}} onClick = {e=>this.export()}>Descargar PDF</Button></center>
                <br/>
                <br/>
                <br/>
                <br/>
                <center><label><strong>Datos Generales</strong></label></center>
                <Card style={{width:"40%"}}>
                <table style={{width:"100%"}} className='table table-small table table-bordered table table-striped'>
                        <tr>
                            <td  className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Cliente</td>
                            <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>{this.state.cliente}</td>
                        </tr>
                        <tr>
                            <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>N. de orden</td>
                            <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>{this.state.orden}</td>
                        </tr>
                        <tr>
                            <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Descripción</td>
                            <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>{this.state.descripcion}</td>
                        </tr>
                        <tr>
                            <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Cantidad</td>
                            <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>{this.state.cantidad}</td>
                        </tr>
                        <tr>
                            <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Fecha inicial</td>
                            <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>{this.state.fechaI.toString().substring(4,16)}</td>
                        </tr>
                        <tr>
                            <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Fecha final</td>
                            <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>{this.state.fechaF.toString().substring(4,16)}</td>
                        </tr>
                </table>  
                </Card>  
                <center><label><strong>Materiales directos</strong></label></center>
                <Card style={{width:"40%"}}>
                    {this.state.arrayMaterialesDirectos.map(rows=>{
                        return(
                            <table style={{width:"100%"}} className='table table-small table table-bordered table table-striped'>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Fecha</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.fecha.toString().substring(7,9) +  " de " + rows.fecha.toString().substring(4,7) + " del " + rows.fecha.toString().substring(11,15)}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Numero de requisición</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.requisicion}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Costo</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.costo}</td>
                            </tr>
                            </table>    
                        )
                    })}
                    <label><strong>COSTO TOTAL DE MATERIALES DIRECTOS : {this.state.costoTotalMaterialesDirectos}</strong></label>
                </Card>
                <center><label><strong>Mano de obra directa</strong></label></center>
                <Card style={{width:"40%"}}>    
                    {this.state.arrayManoDeObra.map(rows=>{
                        return(
                            <table style={{width:"100%"}} className='table table-small table table-bordered table table-striped'>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Fecha</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.fechaM.toString().substring(7,9) +  " de " + rows.fechaM.toString().substring(4,7) + " del " + rows.fechaM.toString().substring(11,15)}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Número de tarjeta</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.tarjeta}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Horas</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.horas}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Tasa</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.tasa}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Costo</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.costo}</td>
                            </tr>
                            </table>    
                        )
                    })}
                    <label><strong>COSTO TOTAL DE MANO DE OBRA : {this.state.costoTotalManoDeObra}</strong></label>
                </Card>
                <center><label><strong>Gastos indirectos de fabricación</strong></label></center>
                <Card style={{width:"40%"}}>    
                    {this.state.arrayGastos.map(rows=>{
                        return(
                            <table style={{width:"100%"}} className='table table-small table table-bordered table table-striped'>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Fecha</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.fechaG.toString().substring(7,9) +  " de " + rows.fechaG.toString().substring(4,7) + " del " + rows.fechaG.toString().substring(11,15)}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Horas</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.horas}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Tasa</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.tasa}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Costo</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{rows.costo}</td>
                            </tr>
                            </table>    
                        )
                    })}
                    <label><strong>COSTO TOTAL DE GASTOS INDIRECTOS DE FABRICACIÓN : {this.state.costoTotalarrayGastos}</strong></label>
                </Card>    

                <center><label><strong>Análisis de costos</strong></label></center>
                <Card style={{width:"40%"}}>    
                            <table style={{width:"100%"}} className='table table-small table table-bordered table table-striped'>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Materiales directos</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{this.state.costoTotalMaterialesDirectos}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Mano de obra directa</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{this.state.costoTotalManoDeObra}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Gastos indirectos de fabricación</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{this.state.costoTotalarrayGastos}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Costos totales</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{parseInt(this.state.costoTotalMaterialesDirectos) + parseInt(this.state.costoTotalManoDeObra) +  parseInt(this.state.costoTotalarrayGastos)}</td>
                            </tr>
                            <tr>
                                <td className='colorCell' style={{backgroundColor:"#0B9769", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Costos unitario</td>
                                <td style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"60%"}}>{(costosTotales/parseInt(this.state.cantidad)).toFixed(2)}</td>
                            </tr>
                            </table>    
                </Card>    
                <div style={{ position: "absolute", left: "-5000px", top: 0 }}>                           
                <PDFExport
                    paperSize="letter"
                    margin="1cm"
                    // scale="0.8"
                    forcePageBreak=".page-break"
                    fileName={"Reporte de análisis de costos.pdf"}
                    pageTemplate = {PageTemplate}  
                    multiPage= "true "         

                    ref={(component) => this.pdfExportComponent = component}>
                        <div>
                        <nav class="navbar navbar-light bg-#D5DEDB">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                            <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                                <font className="navbarText" color="white">Reporte de Analisis de Costos</font>
                            </a>
                        </div>
                        </nav>
                            {/* <nav style={{height:"50px",paddingBottom:"10px"}}>
                                <ul>
                                    <li><font color="white">Reporte de Analisis de Costos</font></li>
                                </ul>
                            </nav> */}
                        </div>
                        <label className='labelText'><strong>No. Orden: {this.state.orden}</strong></label>
                        <div className='fontText'>
                        <Divider />
                        <div>
                        <label><strong>Datos generales</strong></label>
                        <Row gutter={16}>
                            <Col span={13}>
                            <table  style={{width:"100%"}} className='table table-small table table-bordered table table-striped'>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Cliente</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{this.state.cliente}</td>
                                </tr>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Orden Num.</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{this.state.orden}</td>
                                </tr>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Descripción</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{this.state.descripcion}</td>
                                </tr>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Cantidad</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{this.state.cantidad}</td>
                                </tr>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Fecha inicial</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{this.state.fechaI.toString().substring(4,16)}</td>
                                </tr>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Fecha final</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{this.state.fechaF.toString().substring(4,16)}</td>
                                </tr>
                            </table>
                            </Col>
                        </Row>
                        </div>
                        <div>
                        <label className='labelTable'><strong>Materiales directos</strong></label>
                        <Row gutter={16}>
                            {this.state.arrayMaterialesDirectos.map(rows=>{
                                return(
                                    <Col span={8}>
                                    <table  style={{width:"100%"}} className='table table-small table table-bordered table table-striped'>
                                        <tr>
                                            <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Fecha</td>
                                            <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.fecha.toString().substring(7,9) +  " de " + rows.fecha.toString().substring(4,7) + " del " + rows.fecha.toString().substring(11,15)}</td>
                                        </tr>
                                        <tr>
                                            <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Num. Requis.</td>
                                            <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.requisicion}</td>
                                        </tr>
                                        <tr>
                                            <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Costo</td>
                                            <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.costo}</td>
                                        </tr>
                                        <tr>
                                            <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Costo total</td>
                                            <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>{this.state.costoTotalMaterialesDirectos}</td>
                                        </tr>
                                    </table>
                                    </Col>
                                )
                            })}
                            
                        </Row>
                        </div>
                        <div>
                        <label className='labelTable'><strong>Mano de obra directa</strong></label>
                        <Row gutter={16}>
                            {this.state.arrayManoDeObra.map(rows=>{
                                return(
                                    <Col span={8}>
                                    <table  style={{width:"100%"}} className='table table-small table table-bordered table table-striped'>
                                        <tr>
                                            <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Fecha</td>
                                            <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.fechaM.toString().substring(7,9) +  " de " + rows.fechaM.toString().substring(4,7) + " del " + rows.fechaM.toString().substring(11,15)}</td>
                                        </tr>
                                        <tr>
                                            <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Numero de tarjeta</td>
                                            <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.tarjeta}</td>
                                        </tr>
                                        <tr>
                                            <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Horas</td>
                                            <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.horas}</td>
                                        </tr>
                                        <tr>
                                            <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Tasa</td>
                                            <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.tasa}</td>
                                        </tr>
                                        <tr>
                                            <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Costo</td>
                                            <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"10%"}}>{rows.costo}</td>
                                        </tr>
                                        <tr>
                                            <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"2px",paddingBottom:"1px", width:"40%"}}>Costo total</td>
                                            <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{this.state.costoTotalManoDeObra}</td>
                                        </tr>
                                    </table>
                                    </Col>    
                                )
                            })}
                        </Row>
                        </div>
                        <div>
                        <label className='labelTable'><strong>Gastos indirectos de fabricacion</strong></label>
                        <Row gutter={16}>
                            
                            {this.state.arrayGastos.map(rows=>{
                                return(
                                    <Col span={8}>
                                        <table  style={{width:"100%"}} className='table table-small table table-bordered table table-striped'>
                                            <tr>
                                                <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Fecha</td>
                                                <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.fechaG.toString().substring(7,9) +  " de " + rows.fechaG.toString().substring(4,7) + " del " + rows.fechaG.toString().substring(11,15)}</td>
                                            </tr>
                                            <tr>
                                                <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Horas</td>
                                                <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.horas}</td>
                                            </tr>
                                            <tr>
                                                <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Tasa</td>
                                                <td className='fontCell'style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.tasa}</td>
                                            </tr>
                                            <tr>
                                                <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Costo</td>
                                                <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{rows.costo}</td>
                                            </tr>
                                            <tr>
                                                <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>Costo total</td>
                                                <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"2px",paddingBottom:"2px", width:"40%"}}>{this.state.costoTotalarrayGastos}</td>
                                            </tr>
                                        </table>
                                    </Col>  
                                )
                            })}
                            
                        </Row>
                        </div>
                        <div>
                        <label className='labelTable'><strong>Resumen de costos</strong></label>
                        <Row gutter={16}>
                            <Col span={13}>
                            <table  style={{width:"100%"}} className='table table-small table table-bordered table table-striped'>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Materiales directos</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{this.state.costoTotalMaterialesDirectos}</td>
                                </tr>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Mano de obra directa</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{this.state.costoTotalManoDeObra}</td>
                                </tr>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Gastos indirectos de fabricacion</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{this.state.costoTotalarrayGastos}</td>
                                </tr>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Costos totales</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{parseInt(this.state.costoTotalMaterialesDirectos) + parseInt(this.state.costoTotalManoDeObra) +  parseInt(this.state.costoTotalarrayGastos)}</td>
                                </tr>
                                <tr>
                                    <td className='colorCell' style={{backgroundColor:"#02524b", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>Costo unitario</td>
                                    <td className='fontCell' style={{backgroundColor:"#D5DEDB", paddingTop:"1px",paddingBottom:"1px", width:"40%"}}>{(costosTotales/parseInt(this.state.cantidad)).toFixed(2)}</td>
                                </tr>
                            </table>
                            </Col>
                        </Row>
                        </div>
                        </div>
                    </PDFExport>
                </div> 
            </Card>
            
        }
        return (
            <div>
                <div>
                    <nav>
                        <label for="check" class="checkbtn">
                            <i class="fas fa-bars"></i>
                        </label>
                        <label class="logo"><img src={bg} width="90px"/></label>
                        <ul>
                            <li><a class="active" href="#">Versión 0.1</a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                
                </div>
                <div>
                    <center>
                        <Card type='inner' ><h5><strong>Contabilidad y análisis de costos</strong></h5></Card>
                        <div className='cards'>
                            <div style={{width:"100%"}}>
                            {cardInicial}
                            {cardCostos}
                            {modal}
                            {cardAnalisis}
                            </div>
                        </div>
                    </center>
                </div>
            </div>    
        );
    }
}
 
export default CalculoComercial;