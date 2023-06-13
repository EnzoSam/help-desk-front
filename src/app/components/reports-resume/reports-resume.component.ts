import { Component, OnInit } from '@angular/core';
import { IReportOptions } from 'src/app/models/ireports-options';
import { ReportResume } from 'src/app/models/reportResume.model';
import { ReportService } from 'src/app/services/report.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-reports-resume',
  templateUrl: './reports-resume.component.html',
  styleUrls: ['./reports-resume.component.css']
})
export class ReportsResumeComponent implements OnInit {

  report?:ReportResume;
  options:IReportOptions;
  tags:String[];
  values:number[];
  public chart: any;

  constructor(private _reportService:ReportService)
  {
    this.options = this._reportService.newOptions();
    this._reportService.getReport(this.options);
    this.tags = [];
    this.values = [];
  }

  ngOnInit(): void {
          
    this._reportService.getReport(this.options).then(report=>
      {
        this.report = report;
        this.tags = this.assistantsName();
        this.values = this.tiketsTakents(); 
        this.createChart();      
      })
      .catch(error=>
        {
          alert(JSON.stringify(error));
        })
  }

  createChart()
  {
    this.chart = new Chart("tiketsChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.assistantsName(),
	       datasets: [{
    label: 'Tikets',
    data: this.tiketsTakents(),
    backgroundColor: [
      '#C2185B',
      '#458811',
      '#63c218',
			'#883211',
      '#135e7f',
      '#d39819',			
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

  assistantsName():String[]
  {
    if(!this.report)
      return [];
    else
      return this.report?.assistants.map(a=>a.name);
  }

  tiketsTakents():number[]
  {
    if(!this.report)
      return[];

    let arr: number[] = [];
    let i = 0;
    for(let a of this.report?.assistants)
    {
      arr[i] = 0;
      for(let t of this.report?.tikets)
      {
        if(t.assistant?._id === a._id)
        {
            arr[i] = arr[i]+1;
        }
      }
      i++;
    }

    return arr;
  }
}
