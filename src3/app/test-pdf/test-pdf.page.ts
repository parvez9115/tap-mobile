import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-test-pdf',
  templateUrl: './test-pdf.page.html',
  styleUrls: ['./test-pdf.page.scss'],
})
export class TestPDFPage {

  @ViewChild('content') content: ElementRef;

  printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }
 
  clickToDownload() {
    var divContents = document.getElementById("pdf").innerHTML;
    var printWindow = window.open('', '', 'height=1000,width=900');
    printWindow.document.write('<html><head><title>Vehicle Safty</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write('<div id="pdf">\n' +
      '    <img style="position:absolute;top:0.44in;left:0.44in;width:8.41in;height:11.41in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_2.png" />\n' +
      '    <div style="position:absolute;top:0.88in;left:2.32in;width:3.94in;line-height:0.33in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:15pt;font-family:Arial;color:#000000">AVERY DENNISON (INDIA)\n' +
      '        PVT LTD</span><span style="font-style:normal;font-weight:bold;font-size:15pt;font-family:Arial;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:1.15in;left:2.19in;width:4.17in;line-height:0.16in;">\n' +
      '      <DIV style="position:relative; left:0.50in;"><span\n' +
      '          style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000">VECHICLE CONSPICUITY\n' +
      '          ONLINE MIS CERTIFICATE</span><span\n' +
      '          style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000"> </span><br /></DIV>\n' +
      '      <span style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000">COMPLIANCE TO\n' +
      '        AUTOMOTIVE INDUSTRY STANDARD -089,090&amp;037</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Arial;color:#000000"> </span><br />\n' +
      '    </div>\n' +
      '    <img style="position:absolute;top:0.65in;left:6.49in;width:2.36in;height:0.83in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_1.png" />\n' +
      '    <img style="position:absolute;top:11.17in;left:0.62in;width:1.54in;height:0.01in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_3.png" />\n' +
      '    <div style="position:absolute;top:11.18in;left:0.62in;width:1.57in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">Authorized\n' +
      '        Dealer Signature</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <img style="position:absolute;top:11.17in;left:7.08in;width:1.07in;height:0.01in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_4.png" />\n' +
      '    <div style="position:absolute;top:11.18in;left:7.07in;width:1.11in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">Customer\n' +
      '        Signature</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:2.19in;left:0.62in;width:2.89in;line-height:0.21in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">The\n' +
      '        Regional Transport Office</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">TN58\n' +
      '        MADURAI (SOUTH) RTO(TN-58)</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:2.19in;left:6.07in;width:2.69in;line-height:0.21in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">Certificate\n' +
      '        NO :</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
      '        AVERYRRT0050193</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br />\n' +
      '      <DIV style="position:relative; left:0.87in;"><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">Fitment\n' +
      '          Date : 14-09-2020</span><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
      '        </span><br /></DIV>\n' +
      '    </div>\n' +
      '    <img style="position:absolute;top:2.60in;left:0.56in;width:8.16in;height:1.01in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_5.png" />\n' +
      '    <div style="position:absolute;top:2.61in;left:0.62in;width:1.22in;line-height:0.26in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">Vehicle\n' +
      '        Details</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:2.91in;left:1.51in;width:1.64in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Registration\n' +
      '        No : </span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">TN58BA0095</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:2.91in;left:5.80in;width:1.19in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Registration\n' +
      '        Year:</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">2018</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:3.14in;left:1.38in;width:1.91in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Chassis No\n' +
      '        : </span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">MAT483173JYH21081</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:3.14in;left:5.37in;width:2.06in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Engine NO :\n' +
      '      </span><span style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">1\n' +
      '        4CRAIL10HRYSC4575</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:3.37in;left:1.38in;width:1.90in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Vehicle\n' +
      '        Make: TATA MOTORS LTD</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:3.37in;left:5.12in;width:2.56in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Vehicle\n' +
      '        Model : TATA SUPER ACE MINT BS IV</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:2.00in;left:0.62in;width:0.31in;line-height:0.22in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">TO:</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:3.64in;left:0.62in;width:1.82in;line-height:0.26in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">Vehicle\n' +
      '        Owner Details</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:3.64in;left:4.69in;width:2.85in;line-height:0.26in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">Manufacture\n' +
      '        &amp; Distributor Details</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:3.94in;left:0.62in;width:2.20in;line-height:0.16in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Company\n' +
      '        Name/Owner Name : SUDHA V</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Contact\n' +
      '        Number : 7667334949</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:3.94in;left:4.69in;width:3.72in;line-height:0.16in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Manufacturer\n' +
      '        Name : AVERY DENNISON (INDIA)PRIVATE LIMITED</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Distributor\n' +
      '        Name : Bolster Solutions</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:4.32in;left:0.62in;width:1.94in;line-height:0.16in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">Owner Address\n' +
      '        / Register Address :</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br />\n' +
      '      <DIV style="position:relative; left:0.05in;"><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">NO 16,\n' +
      '          FUND OFFICE COLONY,</span><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '        </span><br /></DIV>\n' +
      '      <DIV style="position:relative; left:0.05in;"><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">MADURAI -\n' +
      '          625 003,</span><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '        </span><br /></DIV>\n' +
      '    </div>\n' +
      '    <div style="position:absolute;top:4.32in;left:4.69in;width:1.64in;line-height:0.16in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">MFG\n' +
      '        Address:</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br />\n' +
      '      <DIV style="position:relative; left:0.05in;"><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Narshingpur\n' +
      '          Industrial Area</span><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '        </span><br /></DIV>\n' +
      '      <DIV style="position:relative; left:0.05in;"><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Six\n' +
      '          Kilometer Stone</span><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '        </span><br /></DIV>\n' +
      '      <DIV style="position:relative; left:0.05in;"><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Delhi\n' +
      '          Jaipur Highway,Gurgaon</span><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '        </span><br /></DIV>\n' +
      '      <DIV style="position:relative; left:0.05in;"><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Delhi /\n' +
      '          India.</span><span\n' +
      '          style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '        </span><br /></DIV>\n' +
      '    </div>\n' +
      '    <div style="position:absolute;top:4.32in;left:6.76in;width:1.14in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">Distributor\n' +
      '        Address:</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:4.61in;left:6.81in;width:1.52in;line-height:0.16in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">No 15/5A,\n' +
      '        Vishahan Enclave,</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Gandhi\n' +
      '        Nagar Colony,</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Erode-638009,</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:5.45in;left:0.62in;width:1.63in;line-height:0.18in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Conspicuity\n' +
      '        Tapes 20MM</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Fitment\n' +
      '        Details</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:5.45in;left:2.71in;width:1.80in;line-height:0.20in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Rear Marking\n' +
      '        Plates Details</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:5.45in;left:5.96in;width:1.17in;line-height:0.20in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Certificate\n' +
      '        Details</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:5.86in;left:0.62in;width:1.31in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">20MM - RED\n' +
      '        : 1.20 Mtrs</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:5.86in;left:2.71in;width:3.07in;line-height:0.16in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Class 3 :\n' +
      '        Red Retro Reflective and Yellow Retro Reflective -</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Alternative\n' +
      '        Strips</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:5.86in;left:5.96in;width:2.35in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Type\n' +
      '        Approved Number: A95224 &amp;E13 104R</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:6.25in;left:0.62in;width:1.39in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">20MM WHITE\n' +
      '        : 1.20 Mtrs</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:6.25in;left:2.71in;width:2.81in;line-height:0.16in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Class 4 :\n' +
      '        Red Retro Reflective border and Yellow Retro</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Reflective\n' +
      '        Centre</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:6.25in;left:5.96in;width:2.22in;line-height:0.16in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">COP Number\n' +
      '        :</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">SHL/16/2019-2020/3000008304/COP/3099</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:6.63in;left:0.62in;width:1.63in;line-height:0.18in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Conspicuity\n' +
      '        Tapes 50MM</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">Fitment\n' +
      '        Details</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:6.63in;left:2.71in;width:1.64in;line-height:0.20in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">80MM Circular\n' +
      '        Reflector</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:9pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:6.63in;left:5.96in;width:2.66in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Test Report\n' +
      '        Number :SHL/16/2007-2008/2528/1584</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:7.04in;left:0.62in;width:1.25in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">50MM-RED :\n' +
      '        0.00 Mtrs</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:7.04in;left:2.71in;width:2.09in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">80MM Red\n' +
      '        Circular Reflector : 0.00 Nos</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:7.04in;left:5.96in;width:2.37in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">REAR MARK\n' +
      '        :SHL/16/2016-2017/9203/1186</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:7.27in;left:0.62in;width:1.40in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">50MM-WHITE\n' +
      '        : 0.00 Mtrs</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:7.27in;left:2.71in;width:2.20in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">80MM White\n' +
      '        Circular Reflector : 0.00 Nos</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:7.27in;left:5.96in;width:2.68in;line-height:0.16in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Certified\n' +
      '        By : The Automotive Research Association</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">of India\n' +
      '        (ARAI)</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:7.50in;left:0.62in;width:1.53in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">50MM-YELLOW\n' +
      '        : 1.80 Mtrs</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:7.50in;left:2.71in;width:2.25in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">80MM Yellow\n' +
      '        Circular Reflector : 0.00 Nos</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:7.78in;left:0.62in;width:3.68in;line-height:0.16in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">The Maximun\n' +
      '        Retail Price for the products specified in this Certificate is</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Rs.510\n' +
      '        only.</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:7.78in;left:4.70in;width:3.84in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">20mm: Rs.\n' +
      '        30/feet | 50mm: Rs.46/feet | C3: Rs.650/piece | C4: Rs.750/piece</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:8.16in;left:0.62in;width:0.87in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">Fitment\n' +
      '        Images</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:8.39in;left:0.62in;width:0.30in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Front</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:8.39in;left:2.66in;width:0.29in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Back</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:8.39in;left:4.70in;width:0.36in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Side-1</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:8.39in;left:6.73in;width:0.36in;line-height:0.17in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">Side-2</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <img style="position:absolute;top:8.62in;left:0.62in;width:1.56in;height:1.35in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_2.png" />\n' +
      '    <img style="position:absolute;top:8.62in;left:2.66in;width:1.56in;height:1.35in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_3.png" />\n' +
      '    <img style="position:absolute;top:8.62in;left:4.70in;width:1.56in;height:1.35in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_4.png" />\n' +
      '    <img style="position:absolute;top:8.62in;left:6.73in;width:1.56in;height:1.35in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_5.png" />\n' +
      '    <div style="position:absolute;top:10.05in;left:0.62in;width:5.94in;line-height:0.13in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">This is to\n' +
      '        certify that we have authorised Distributor / Dealer for the sale AIS-089,090,&amp;037 Compliant AVERY Brand\n' +
      '        Retro reflective Tapes</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:6pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:6pt;font-family:Times New Roman;color:#000000">Supplied by\n' +
      '        us as per CMVR 104-1989</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:10.46in;left:6.79in;width:1.84in;line-height:0.14in;"><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:7pt;font-family:Times New Roman;color:#000000">Authorized\n' +
      '        Distributor Seal &amp; Signature</span><span\n' +
      '        style="font-style:normal;font-weight:bold;font-size:7pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <div style="position:absolute;top:10.35in;left:0.62in;width:6.00in;line-height:0.13in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">We hereby\n' +
      '        certify that we have supplied/installed ICAT/ARAI Approved Retro Reflective Tapes as per CMRV rule 104 specified\n' +
      '        under CMVR</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">GSR 784\n' +
      '        (E)</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:7pt;font-family:Times New Roman;color:#000000">\n' +
      '      </span><br /></div>\n' +
      '    <img style="position:absolute;top:1.90in;left:3.64in;width:2.10in;height:0.01in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_6.png" />\n' +
      '    <img style="position:absolute;top:2.32in;left:3.64in;width:2.10in;height:0.01in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_7.png" />\n' +
      '    <img style="position:absolute;top:1.90in;left:5.74in;width:0.01in;height:0.44in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_8.png" />\n' +
      '    <img style="position:absolute;top:1.90in;left:3.64in;width:0.01in;height:0.44in"\n' +
      '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ci_9.png" />\n' +
      '    <div style="position:absolute;top:1.96in;left:4.00in;width:1.44in;line-height:0.22in;"><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#181818">Paste\n' +
      '        Hologram here</span><span\n' +
      '        style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Times New Roman;color:#181818">\n' +
      '      </span><br /></div>\n' +
      '  </div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }

  public captureScreen() {

    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });


    // let html = document.getElementById('capture')
    // html2canvas(html,{allowTaint: true, useCORS: true}).then((canvas)=>{
    //   console.log(canvas)
    //   var doc = new jspdf.jsPDF();
    //   let imageData = canvas.toDataURL('image/png')
    //   let imageHeight = canvas.height*280/canvas.width
    //   doc.addImage(imageData,0,0,208,500)
    //   doc.output('dataurl')
    // })
    // var doc = new jsPDF();

    // doc.setFontSize(18);
    // doc.text('My PDF Table', 11, 8);
    // doc.setFontSize(11);
    // doc.setTextColor(100);


    // (doc as any).autoTable({
    //   head:[['ID', 'Country', 'Rank', 'Capital']],
    //   body: [
    //     [1, 'Finland', 7.632, 'Helsinki'],
    //     [2, 'Norway', 7.594, 'Oslo'],
    //     [3, 'Denmark', 7.555, 'Copenhagen'],
    //     [4, 'Iceland', 7.495, 'Reykjavík'],
    //     [5, 'Switzerland', 7.487, 'Bern'],
    //     [9, 'Sweden', 7.314, 'Stockholm'],
    //     [73, 'Belarus', 5.483, 'Minsk'],
    //   ],
    //   theme: 'plain',
    //   didDrawCell: data => {
    //     console.log(data.column.index)
    //   }
    // })

    // // Open PDF document in new tab
    // doc.output('dataurlnewwindow')

    // // Download PDF document  
    // doc.save('table.pdf');

    // //   html2canvas(document.body).then(canvas => {
    // //     document.body.appendChild(canvas)
    // // });
    //   var element = this.content.nativeElement;
    // var opt = {
    //   margin: 1,
    //   filename: 'myfile.pdf',
    //   image: { type: 'jpeg', quality: 0.98 },
    //   html2canvas: { },
    //   jsPDF: { orientation: 'landscape' }
    // };

    //   // New Promise-based usage:
    //   html2pdf().from("<h1 style='font-size:100px'>hello</h1>").set(opt).save()

    //   // Old monolithic-style usage:
    //   // html2pdf(element, opt);


    //     let doc: any = new jsPDF();
    //     // let specialElementHandlers = {
    //     //   '#editor': function (element, renderer) {
    //     //     return true;
    //     //   }
    //     // };
    //     let content = this.content.nativeElement;
    //     doc.html(content.innerHTML, {
    //       callback: function (pdf) {
    //         // pdf.save('test.pdf');////
    //       }
    //     });
    // doc.output('dataurlnewwindow')
    // doc.save('test.pdf');
    // let doc = new jsPDF(); doc.text(20, 20, 'Hello world'); doc.save('Test.pdf');///
  }
  ngOnInIt() {

  }
}
