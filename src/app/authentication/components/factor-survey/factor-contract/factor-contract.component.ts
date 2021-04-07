import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ContractService, IContract } from 'src/app/authentication/services/contract.service';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { ActivatedRoute } from '@angular/router';
import { FactorContractService } from '../services/factor-contract.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-factor-contract',
  templateUrl: './factor-contract.component.html',
  styleUrls: ['./factor-contract.component.css']
})
export class FactorContractComponent implements OnInit {

  form: FormGroup;
  contractId: any;
  status: any;

  testTT() {
    // let checkboxArray = new FormArray([
    //   new FormControl(true),
    //   new FormControl(false),
    //   new FormControl(true)]);

    // this.form = this.builder.group({
    //   myValues: this.builder.array([true, false, true])
    // });

    // this.form = this.builder.group({
    //   myValues: checkboxArray
    // });
  }

  strucBuilding: string[] = ['คอนกรีต / เหล็ก', 'ครึ่งตึกครึ่งไม้', 'ไม้'];
  hiLow: string[] = ['สูง', 'ปานกลาง', 'ต่ำ'];
  buildingCon: string[] = ['ใหม่', 'สภาพดี', 'ปานกลาง', 'พอใช้', 'เก่า', 'ทรุดโทรม'];
  roofFrames: string[] = ['เหล็ก', 'ไม้', 'คอนกรีต'];
  roofMaterials: string[] = ['กระเบื้องโมเนีย', 'กระเบื้องลอนคู่', 'เมทัลชีท', 'สังกะสี', 'กระเบื้องดินเผา', 'คอนกรีต', 'อื่นๆ', 'ไม่สามารถตรวจสอบได้'];
  mainstructure: string[] = ['คอนกรีต', 'ไม้', 'ครึ่งตึกครึ่งไม้', 'เหล็ก', 'อื่นๆ'];
  celling: string[] = ['ยิปซั่มบอร์ดทีบาร์', 'ยิปซั่มบอร์ดฉาบเรียบ', 'คอนกรีต', 'คอนกรีตขัดมัน', 'ไม้', 'กระเบื้องแผ่นเรียบ', 'อื่นๆ', 'ไม่สามารถตรวจสอบได้'];
  floorMaterials: string[] = ['กระเบื้องเซรามิค', 'กระเบื้องยาง', 'คอนกรีตขัดมัน', 'กระเบื้องแกรนิตโต้', 'ลามิเนต', 'หินอ่อน', 'หินแกรนิต', 'ปาเก้', 'พรม', 'ไม่เนื้อแข็ง', 'อื่นๆ', 'ไม่สามารถตรวจสอบได้'];
  wallMaterials: string[] = ['ก่ออิฐฉาบปูนทาสี', 'กระจกอลูมิเนียม', 'วอลเปเปอร์', 'ไม้อัด', 'ยิปซั่ม', 'กระเบื้องแผ่นเรียบ', 'เมทัลชีท', 'สังกะสี', 'ไม้เฌอร่า', 'อื่นๆ', 'ไม่สามารถตรวจสอบได้'];
  door: string[] = ['บานไม้เนื้อแข็ง', 'บานไม้อัด', 'บ้านไม้กรุกระจก', 'บาน PVC', 'บานกระจก', 'บานอลูมิเนียมกระจก', 'บานเหล็ก', 'บานเหล็กม้วน', 'บานเหล็กยืด', 'อื่นๆ', 'ไม่สามารถตรวจสอบได้'];
  window: string[] = ['บ้านไม้กรุกระจก', 'บานอลูมิเนียมกระจก', 'บานอลูมิเนียม', 'บานเกล็ด', 'บานไม้', 'อื่นๆ', 'ไม่สามารถตรวจสอบได้'];
  sanitaryWare: string[] = ['โถส้วมแบบชักโครก', 'โถปัสสาวะชาย', 'โถส้วมแบบนั่งยอง', 'อ่างล้างหน้า', 'อ่างอาบน้ำ', 'ไม่สามารถตรวจสอบได้'];
  buildingSystem: string[] = ['ลิฟท์โดยสาร', 'ไฟฟ้า', 'ประปา', 'โทรศัพท์', 'ปรับอากาศ', 'ดับเพลิง', 'รักษาความปลอดภัย', 'สื่อสาร'];
  toilet: string[] = ['กระเบื้องเซรามิค', 'กระเบื้องยาง', 'คอนกรีตขัดมัน', 'กระเบื้องแกรนิตโต้', 'หินอ่อน', 'หินแกรนิต', 'อื่นๆ', 'ไม่สามารถตรวจสอบได้'];
  landUse = [{ va: 'Y', name: 'การใช่ประโยชน์ตรงกับสัญญาเช่า' }, { va: 'N', name: 'การใช่ประโยชน์ไม่ตรงกับสัญญาเช่า' }];
  yesNo: string[] = ['ได้', 'ไม่ได้'];

  public contractData: IContract;

  constructor(
    private builder: FormBuilder,
    private contractService: ContractService,
    private alert: AlertService,
    private activatedRoute: ActivatedRoute,
    private factorContract: FactorContractService
  ) {
    this.initialCreateFormData();
    this.activatedRoute.params.forEach(params => {
      // console.log(params);
      this.contractId = params.id;
      this.status = params.st;
    });

    // check ว่าเป็นการ update หรือ add
    if (this.status) {
      this.getDataContract();
    } else {
      this.getDataContract();
      this.getDataFactorContract();
    }

  }

  onCheckboxroofFrame(e) {
    const roofFrame: FormArray = this.form.get('roofFrame') as FormArray;
    if (e.target.checked) {
      roofFrame.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      roofFrame.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          roofFrame.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxroofMaterials(e) {
    const roofMaterials: FormArray = this.form.get('roofMaterials') as FormArray;
    if (e.target.checked) {
      roofMaterials.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      roofMaterials.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          roofMaterials.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxmainStructure(e) {
    const mainStructure = this.form.get('mainStructure') as FormArray;
    if (e.target.checked) {
      mainStructure.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      mainStructure.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          mainStructure.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxceiling(e) {
    const ceiling: FormArray = this.form.get('ceiling') as FormArray;
    if (e.target.checked) {
      ceiling.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      ceiling.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          ceiling.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxfloorMaterials(e) {
    const floorMaterials: FormArray = this.form.get('floorMaterials') as FormArray;
    if (e.target.checked) {
      floorMaterials.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      floorMaterials.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          floorMaterials.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxwallMaterials(e) {
    const wallMaterials: FormArray = this.form.get('wallMaterials') as FormArray;
    if (e.target.checked) {
      wallMaterials.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      wallMaterials.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          wallMaterials.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxdoor(e) {
    const door: FormArray = this.form.get('door') as FormArray;
    if (e.target.checked) {
      door.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      door.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          door.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxdoorIn(e) {
    const doorIn: FormArray = this.form.get('doorIn') as FormArray;
    if (e.target.checked) {
      doorIn.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      doorIn.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          doorIn.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxwindow(e) {
    const window: FormArray = this.form.get('window') as FormArray;
    if (e.target.checked) {
      window.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      window.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          window.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxtoilet(e) {
    const toilet: FormArray = this.form.get('toilet') as FormArray;
    if (e.target.checked) {
      toilet.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      toilet.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          toilet.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxsanitaryWare(e) {
    const sanitaryWare: FormArray = this.form.get('sanitaryWare') as FormArray;
    if (e.target.checked) {
      sanitaryWare.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      sanitaryWare.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          sanitaryWare.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCheckboxbuildingSystem(e) {
    const buildingSystem: FormArray = this.form.get('buildingSystem') as FormArray;
    if (e.target.checked) {
      buildingSystem.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      buildingSystem.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          buildingSystem.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  // แสดงข้อมูลปัจจัย
  private getDataContract() {
    // console.log(this.contractId)
    this.contractService
      .getContractById(this.contractId)
      .then(result => this.contractData = result)
      .catch(err => this.alert.notify(err.Message))
  }

  roofFrameAPI: string;
  test: boolean[];


  private getDataFactorContract() {

    this.factorContract
      .getFactorContract(this.contractId)
      .then(result => {
        this.form.controls['id'].setValue(result.SURVEY_DATA_BUILDING_SEQ)
        this.form.controls['address'].setValue(result.ADDRESS)
        // this.form.controls['address']
        this.form.controls['soi'].setValue(result.SOI)
        this.form.controls['road'].setValue(result.ROAD)
        this.form.controls['structureBuilding'].setValue(result.STRUCTURE_BUIDING)
        this.form.controls['buildingType'].setValue(result.BUILDING_TYPE)
        this.form.controls['numberFloors'].setValue(result.NUMBER_FLOORS)
        this.form.controls['sizeWidth'].setValue(result.SIZE_WIDTH)
        this.form.controls['sizeLong'].setValue(result.SIZE_LONG)
        this.form.controls['landUseSpace'].setValue(result.LAND_USE_SPACE)
        this.form.controls['ageBuilding'].setValue(result.AGE_BUILDING)
        this.form.controls['buildingModel'].setValue(result.BUILDING_MODEL)
        this.form.controls['qualityMaterials'].setValue(result.QUALITY_MATERIALS)
        this.form.controls['buildingCondition'].setValue(result.BUILDING_CONDITION)
        this.form.controls['modifyBuilding'].setValue(result.MODIFY_BUILDING)

        // this.form.controls['roofFrame'].setValue(this.test)
        // this.form.controls['roofFrame'].setValue(this.roofFrameAPI)
        this.roofFrameAPI = result.ROOF_FRAME;
        // this.form.controls['roofMaterials'].setValue(result.BUILDING_TYPE)
        // this.form.controls['mainStructure'].setValue(result.BUILDING_TYPE)
        // this.form.controls['ceiling'].setValue(result.BUILDING_TYPE)
        // this.form.controls['floorMaterials'].setValue(result.BUILDING_TYPE)
        // this.form.controls['wallMaterials'].setValue(result.BUILDING_TYPE)
        // this.form.controls['door'].setValue(result.BUILDING_TYPE)
        // this.form.controls['doorIn'].setValue(result.BUILDING_TYPE)
        // this.form.controls['window'].setValue(result.BUILDING_TYPE)
        // this.form.controls['toilet'].setValue(result.BUILDING_TYPE)
        // this.form.controls['sanitaryWare'].setValue(result.SANITARY_WARE)
        this.form.controls['landUse'].setValue(result.LAND_USE)
        this.form.controls['landUseRa'].setValue(result.LAND_USE_RA)
        this.form.controls['inBuiding'].setValue(result.IN_BUIDING)
        this.form.controls['opsInBuiding'].setValue(result.OPS_IN_BUIDING)
        this.form.controls['note'].setValue(result.NOTE)
        this.form.controls['date'].setValue(result.SURVEY_DATE)
        // this.form.controls['buildingSystem'].setValue(result.BUILDING_SYSTEM)
        // this.form.controls['mainStructure'].setValue(result.)
        // console.log(result.ROOF_FRAME); 

      })
      .catch(err => this.alert.notify(err.Message))
  }

  ngOnInit(): void {
    // this.addCheckboxes();
    // of(this.getOrders()).subscribe(orders => {
    // // of(this.yesNo).subscribe(orders => {
    //   this.roofFrames = orders;

    //   this.addCheckboxes2();
    // this.addCheckboxes();
    // });
    // this.roofFrames = this.getOrders();
    // const selectedOrderIds = this.form.value.orders
    // .map((checked, i) => checked ? this.roofFrames[i] : null)
    // .filter(v => v !== null);
    this.createForm();
  }


  checkedIDs = [];
  // บันทึกข้อมูล
  onSubmit() {
    console.log(this.form.value);
    // this.factorContract
    //   .onUpdateFactorContract(this.form.value)
    //   .then(res=>{
    //     this.alert.notify('อัพเดตข้อมูลสำเร็จ', 'info');
    //   })
    //   .catch(err => this.alert.notify(err.Message))
    this.checkedIDs = this.form.value.roofFrame
      .map((v, i) => v ? this.roofFrames[i] : null)
      .filter(v => v !== null);
    console.log(this.checkedIDs);

  }

  get ordersFormArray() {
    return this.form.controls.roofFrame as FormArray;
  }


  private addCheckboxes() {
    // this.roofFrames.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }


  // ฟอร์มเก็บข้อมูล
  private initialCreateFormData() {
    this.test = [true, true, false];
    this.form = this.builder.group({
      id: [''],
      address: [''],
      // address: ['',Validators.required],
      soi: [''],
      road: [''],
      structureBuilding: [''],
      buildingType: [''],
      numberFloors: [''],
      sizeWidth: [''],
      sizeLong: [''],
      landUseSpace: [''],
      ageBuilding: [''],
      buildingModel: [''],
      qualityMaterials: [''],
      buildingCondition: [''],
      modifyBuilding: [''],
      roofFrame: this.builder.array(this.test),
      // roofFrame: [] = this.checkedIDs,
      roofMaterials: this.builder.array([]),
      mainStructure: this.builder.array([]),
      // mainStructure:  [],
      ceiling: this.builder.array([]),
      floorMaterials: this.builder.array([]),
      wallMaterials: this.builder.array([]),
      door: this.builder.array([]),
      doorIn: this.builder.array([]),
      window: this.builder.array([]),
      toilet: this.builder.array([]),
      sanitaryWare: this.builder.array([]),
      landUse: [''],
      landUseRa: [''],
      inBuiding: [''],
      opsInBuiding: [''],
      note: [''],
      date: [''],
      buildingSystem: this.builder.array([]),
    });
  }
  heroForm: FormGroup;
  createForm() {

    //Form Group for a Hero Form
    this.heroForm = this.builder.group({
      name: '',
      countries: this.builder.array([])
    });

    let countries = ['US', 'Germany', 'France'];

    this.setCountries(countries);
  }

  setCountries(countries: string[]) {

    //One Form Group for one country
    const countriesFGs = countries.map(country => {
      let obj = {}; obj[country] = true;
      return this.builder.group(obj)
    });

    const countryFormArray = this.builder.array(countriesFGs);
    this.heroForm.setControl('countries', countryFormArray);
  }

  get countries(): FormArray {
    return this.heroForm.get('countries') as FormArray;
};

}
