import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutDefaultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  
  title = 'EasyUI 示例';

  menus = [{
    text: '消息中心服务',
    iconCls: 'fa fa-bell',
    state: 'open',
    children: [{
      text: '数据统计分析',
      url: '/messageCenter/dashboard'
    }, {
      text: '短信发送情况',
      url: '/messageCenter/smsSend'
    }, {
      text: '邮件发送情况',
      url: '/messageCenter/emailSend'
    }, {
      text: '短信模板配置',
      url: '/messageCenter/smsTempalte'
    }, {
      text: '服务配置管理',
      url: '/messageCenter/settings'
    }]
  }, {
    text: '版本管理服务',
    iconCls: 'fa fa-tag',
    children: [{
      text: '数据统计分析',
      url: '/appVersion/dashboard'
    }, {
      text: 'app版本管理',
      url: '/appVersion/versions'
    }]
  }, {
    text: '天润外呼服务',
    iconCls: 'fa fa-phone',
    children: [{
      text: '数据统计分析',
      url: '/crmCall/dashboard'
    }, {
      text: '外呼记录查询',
      url: '/crmCall/callRecords'
    }]
  }];

  width = 200;
  collapsed = false;

  toggle() {
    this.collapsed = !this.collapsed;
    this.width = this.collapsed ? 50 : 200;
  }

  onItemClick(item) {
    this.router.navigate([item.url])
  }

}
