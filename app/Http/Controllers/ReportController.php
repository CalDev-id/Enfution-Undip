<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\DBCCTeam;
use App\Models\CCTransaction;
use App\Models\CSTransaction;
use App\Models\DBCCTransaction;
use App\Models\SemnasParticipant;
use App\Models\SemnasTransaction;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Cell\DataType;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ReportController extends Controller
{
    //
    static private $event;
    public function printVerif()
    {
        switch (request('event')) {
            case 'talk-1':
                ReportController::$event = "Early Talk 1";
                break;
            case 'talk-2':
                ReportController::$event = "Early Talk 2";
                break;
            default:
                ReportController::$event = "Summit";
                break;
        }

        $req = ['event', 'status'];
        $transactions = SemnasTransaction::filter(request($req))->orderBy('updated_at', 'asc')->get();
        $totalData = count($transactions);


        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->getColumnDimension('G')->setAutoSize(true);
        $sheet->getColumnDimension('J')->setAutoSize(true);

        $info = "A1:G3";
        $header = "A5:G5";
        $counter = 6;
        $content = "A6:G" . $totalData + 6;
        $contentAmount = "G6:G" . $totalData + 6;
        $contentDate = "E6:F" . $totalData + 1;
        $contentTotalBalance = "A" . $totalData + 6 . ":" . "F" . $totalData + 6;

        // Konten Header
        $sheet->setCellValue('A5', 'No.');
        $sheet->setCellValue('B5', 'Nama Peserta');
        $sheet->setCellValue('C5', 'Nama Akun');
        $sheet->setCellValue('D5', 'Nomor Rekening');
        $sheet->setCellValue('E5', 'Tanggal Daftar');
        $sheet->setCellValue('F5', 'Tanggal Bayar');
        $sheet->setCellValue('G5', 'Jumlah Bayar');


        // Data
        foreach ($transactions as $transaction) {
            $sheet->setCellValue("A$counter", $counter - 5);
            $sheet->setCellValue("B$counter", $transaction->peserta_semnas->full_name);
            $sheet->setCellValue("C$counter", $transaction->account_name);
            $sheet->setCellValueExplicit("D$counter", $transaction->account_number, DataType::TYPE_STRING);
            $sheet->setCellValue("E$counter", date_format($transaction->created_at, "d M Y, H:i"));
            $sheet->setCellValue("F$counter", date_format($transaction->updated_at, "d M Y, H:i"));
            $sheet->setCellValue("G$counter", $transaction->amount);
            $counter++;
        }

        $styleHeader = [
            'font' => [
                'bold' => true,
                'size' => 14
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['argb' => 'FFFFFF00']
            ],
        ];

        $styleContent = [
            'font' => [
                "size" => 12
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
        ];

        $styleContentAmount = [
            'font' => [
                "bold" => true
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_RIGHT,
            ],
        ];

        $styleContentTotalBalance = [
            'font' => [
                "bold" => true,
                'size' => 14
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => '33cc33']
            ],
        ];

        $styleContentInfo = [
            'font' => [
                "bold" => true,
                'size' => 16
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => 'ff9966']
            ],
        ];

        // Informasi
        $currentDateTime = date_format(Carbon::now(), "d M Y, H:i");
        $sheet->mergeCells($info);
        $sheet->setCellValue("A1", "DATA PESERTA SEMNAS - " . ReportController::$event . " Per $currentDateTime");
        $sheet->getStyle($info)->applyFromArray($styleContentInfo);

        $sheet->getStyle($header)->applyFromArray($styleHeader);
        $sheet->getStyle($content)->applyFromArray($styleContent);
        $sheet->getStyle($contentAmount)->applyFromArray($styleContentAmount);
        $sheet->getStyle($contentDate)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

        // Total Balance
        $sheet->mergeCells($contentTotalBalance);
        $sheet->getStyle($contentAmount)->getNumberFormat()->setFormatCode('_-* #,##0');
        $sheet->setCellValue("A" . $totalData + 6, "Total Pendapatan");
        $sheet->setCellValue("G" . $totalData + 6, "=SUM(G6:G" . $totalData + 5 . ")");
        $sheet->getStyle($contentTotalBalance)->applyFromArray($styleContentTotalBalance);


        // Total Peserta Yang Ikut

        $styleTitleInfoGrafis = [
            'font' => [
                "bold" => true,
                'size' => 13
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => 'ff9966']
            ],
        ];

        $styleInfoGrafis = [
            'font' => [
                "bold" => true,
                'size' => 12
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
        ];

        $total = count(SemnasParticipant::where('event', request('event'))->get());
        $sheet->setCellValue('J2', "Total Peserta");
        $sheet->setCellValue('K2', $total);

        $sheet->setCellValue('J4', "Diterima");
        $sheet->setCellValue('K4', $totalData);

        request()->merge([
            "status" => "PENDING",
        ]);
        $menunggu = count(SemnasTransaction::filter(request($req))->get());
        $sheet->setCellValue('J3', "Menunggu");
        $sheet->setCellValue('K3', $menunggu);

        request()->merge([
            "status" => "REJECTED",
        ]);
        $rejected = count(SemnasTransaction::filter(request($req))->get());
        $sheet->setCellValue('J5', "Ditolak");
        $sheet->setCellValue('K5', $rejected);

        $sheet->getStyle("J2:K5")->applyFromArray($styleInfoGrafis);
        $sheet->getStyle("J2:J5")->applyFromArray($styleTitleInfoGrafis);
        $sheet->getStyle("K2:K5")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);

        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header("Content-Disposition: attachment;filename=" . "Semnas - " . ReportController::$event . ".xlsx");
        header('Cache-Control: max-age=0');
        $writer->save('php://output');
        exit();
    }

    public function printDBCCVerif()
    {
        switch (request('periode')) {
            case 'EB':
                ReportController::$event = "Early Bird";
                break;
            case 'NORMAL':
                ReportController::$event = "Normal Registration";
                break;
        }

        $req = ['periode', 'status'];
        $transactions = DBCCTransaction::filter(request($req))->orderBy('updated_at', 'asc')->get();
        // dd($transactions);
        $totalData = count($transactions);


        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->getColumnDimension('G')->setAutoSize(true);
        $sheet->getColumnDimension('J')->setAutoSize(true);

        $info = "A1:G3";
        $header = "A5:G5";
        $counter = 6;
        $content = "A6:G" . $totalData + 6;
        $contentAmount = "G6:G" . $totalData + 6;
        $contentDate = "E6:F" . $totalData + 1;
        $contentTotalBalance = "A" . $totalData + 6 . ":" . "F" . $totalData + 6;

        // Konten Header
        $sheet->setCellValue('A5', 'No.');
        $sheet->setCellValue('B5', 'Nama Tim');
        $sheet->setCellValue('C5', 'Nama Akun');
        $sheet->setCellValue('D5', 'Nomor Rekening');
        $sheet->setCellValue('E5', 'Tanggal Daftar');
        $sheet->setCellValue('F5', 'Tanggal Bayar');
        $sheet->setCellValue('G5', 'Jumlah Bayar');


        // Data
        foreach ($transactions as $transaction) {
            $sheet->setCellValue("A$counter", $counter - 5);
            $sheet->setCellValue("B$counter", $transaction->dbcc_team->team_name);
            $sheet->setCellValue("C$counter", $transaction->account_name);
            $sheet->setCellValueExplicit("D$counter", $transaction->account_number, DataType::TYPE_STRING);
            $sheet->setCellValue("E$counter", date_format($transaction->created_at, "d M Y, H:i"));
            $sheet->setCellValue("F$counter", date_format($transaction->updated_at, "d M Y, H:i"));
            $sheet->setCellValue("G$counter", $transaction->amount);
            $counter++;
        }

        $styleHeader = [
            'font' => [
                'bold' => true,
                'size' => 14
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['argb' => 'FFFFFF00']
            ],
        ];

        $styleContent = [
            'font' => [
                "size" => 12
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
        ];

        $styleContentAmount = [
            'font' => [
                "bold" => true
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_RIGHT,
            ],
        ];

        $styleContentTotalBalance = [
            'font' => [
                "bold" => true,
                'size' => 14
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => '33cc33']
            ],
        ];

        $styleContentInfo = [
            'font' => [
                "bold" => true,
                'size' => 16
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => 'ff9966']
            ],
        ];

        // Informasi
        $currentDateTime = date_format(Carbon::now(), "d M Y, H:i");
        $sheet->mergeCells($info);
        $sheet->setCellValue("A1", "DATA TIM DBCC - " . ReportController::$event . " Per $currentDateTime WIB");
        $sheet->getStyle($info)->applyFromArray($styleContentInfo);

        $sheet->getStyle($header)->applyFromArray($styleHeader);
        $sheet->getStyle($content)->applyFromArray($styleContent);
        $sheet->getStyle($contentAmount)->applyFromArray($styleContentAmount);
        $sheet->getStyle($contentDate)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

        // Total Balance
        $sheet->mergeCells($contentTotalBalance);
        $sheet->getStyle($contentAmount)->getNumberFormat()->setFormatCode('_-* #,##0');
        $sheet->setCellValue("A" . $totalData + 6, "Total Pendapatan");
        $sheet->setCellValue("G" . $totalData + 6, "=SUM(G6:G" . $totalData + 5 . ")");
        $sheet->getStyle($contentTotalBalance)->applyFromArray($styleContentTotalBalance);


        // Total Peserta Yang Ikut

        $styleTitleInfoGrafis = [
            'font' => [
                "bold" => true,
                'size' => 13
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => 'ff9966']
            ],
        ];

        $styleInfoGrafis = [
            'font' => [
                "bold" => true,
                'size' => 12
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
        ];

        $total = count(DBCCTransaction::where('status_periode', request('periode'))->get());
        $sheet->setCellValue('J2', "Total Tim");
        $sheet->setCellValue('K2', $total);

        $sheet->setCellValue('J4', "Diterima");
        $sheet->setCellValue('K4', $totalData);

        request()->merge([
            "status" => "PENDING",
        ]);
        $menunggu = count(DBCCTransaction::filter(request($req))->get());
        $sheet->setCellValue('J3', "Menunggu");
        $sheet->setCellValue('K3', $menunggu);

        request()->merge([
            "status" => "REJECTED",
        ]);
        $rejected = count(DBCCTransaction::filter(request($req))->get());
        $sheet->setCellValue('J5', "Ditolak");
        $sheet->setCellValue('K5', $rejected);

        $sheet->getStyle("J2:K5")->applyFromArray($styleInfoGrafis);
        $sheet->getStyle("J2:J5")->applyFromArray($styleTitleInfoGrafis);
        $sheet->getStyle("K2:K5")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);

        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header("Content-Disposition: attachment;filename=" . "DBCC - " . ReportController::$event . ".xlsx");
        header('Cache-Control: max-age=0');
        $writer->save('php://output');
        exit();
    }

    public function printCSVerif()
    {
        switch (request('periode')) {
            case 'EB':
                ReportController::$event = "Early Bird";
                break;
            case 'NORMAL':
                ReportController::$event = "Normal Registration";
                break;
        }

        $req = ['periode', 'status'];
        $transactions = CSTransaction::filter(request($req))->orderBy('updated_at', 'asc')->get();
        // dd($transactions);
        $totalData = count($transactions);


        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->getColumnDimension('G')->setAutoSize(true);
        $sheet->getColumnDimension('J')->setAutoSize(true);

        $info = "A1:G3";
        $header = "A5:G5";
        $counter = 6;
        $content = "A6:G" . $totalData + 6;
        $contentAmount = "G6:G" . $totalData + 6;
        $contentDate = "E6:F" . $totalData + 1;
        $contentTotalBalance = "A" . $totalData + 6 . ":" . "F" . $totalData + 6;

        // Konten Header
        $sheet->setCellValue('A5', 'No.');
        $sheet->setCellValue('B5', 'Nama Peserta (First Member)');
        $sheet->setCellValue('C5', 'Nama Akun');
        $sheet->setCellValue('D5', 'Nomor Rekening');
        $sheet->setCellValue('E5', 'Tanggal Daftar');
        $sheet->setCellValue('F5', 'Tanggal Bayar');
        $sheet->setCellValue('G5', 'Jumlah Bayar');


        // Data
        foreach ($transactions as $transaction) {
            $sheet->setCellValue("A$counter", $counter - 5);
            $sheet->setCellValue("B$counter", $transaction->cs_participant->full_name);
            $sheet->setCellValue("C$counter", $transaction->account_name);
            $sheet->setCellValueExplicit("D$counter", $transaction->account_number, DataType::TYPE_STRING);
            $sheet->setCellValue("E$counter", date_format($transaction->created_at, "d M Y, H:i"));
            $sheet->setCellValue("F$counter", date_format($transaction->updated_at, "d M Y, H:i"));
            $sheet->setCellValue("G$counter", $transaction->amount);
            $counter++;
        }

        $styleHeader = [
            'font' => [
                'bold' => true,
                'size' => 14
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['argb' => 'FFFFFF00']
            ],
        ];

        $styleContent = [
            'font' => [
                "size" => 12
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
        ];

        $styleContentAmount = [
            'font' => [
                "bold" => true
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_RIGHT,
            ],
        ];

        $styleContentTotalBalance = [
            'font' => [
                "bold" => true,
                'size' => 14
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => '33cc33']
            ],
        ];

        $styleContentInfo = [
            'font' => [
                "bold" => true,
                'size' => 16
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => 'ff9966']
            ],
        ];

        // Informasi
        $currentDateTime = date_format(Carbon::now(), "d M Y, H:i");
        $sheet->mergeCells($info);
        $sheet->setCellValue("A1", "DATA TRANSAKSI COACHING SESSION - " . ReportController::$event . " Per $currentDateTime WIB");
        $sheet->getStyle($info)->applyFromArray($styleContentInfo);

        $sheet->getStyle($header)->applyFromArray($styleHeader);
        $sheet->getStyle($content)->applyFromArray($styleContent);
        $sheet->getStyle($contentAmount)->applyFromArray($styleContentAmount);
        $sheet->getStyle($contentDate)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

        // Total Balance
        $sheet->mergeCells($contentTotalBalance);
        $sheet->getStyle($contentAmount)->getNumberFormat()->setFormatCode('_-* #,##0');
        $sheet->setCellValue("A" . $totalData + 6, "Total Pendapatan");
        $sheet->setCellValue("G" . $totalData + 6, "=SUM(G6:G" . $totalData + 5 . ")");
        $sheet->getStyle($contentTotalBalance)->applyFromArray($styleContentTotalBalance);


        // Total Peserta Yang Ikut

        $styleTitleInfoGrafis = [
            'font' => [
                "bold" => true,
                'size' => 13
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => 'ff9966']
            ],
        ];

        $styleInfoGrafis = [
            'font' => [
                "bold" => true,
                'size' => 12
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
        ];

        $total = count(CSTransaction::where('status_periode', request('periode'))->get());
        $sheet->setCellValue('J2', "Total Peserta");
        $sheet->setCellValue('K2', $total);

        $sheet->setCellValue('J4', "Diterima");
        $sheet->setCellValue('K4', $totalData);

        request()->merge([
            "status" => "PENDING",
        ]);
        $menunggu = count(CSTransaction::filter(request($req))->get());
        $sheet->setCellValue('J3', "Menunggu");
        $sheet->setCellValue('K3', $menunggu);

        request()->merge([
            "status" => "REJECTED",
        ]);
        $rejected = count(CSTransaction::filter(request($req))->get());
        $sheet->setCellValue('J5', "Ditolak");
        $sheet->setCellValue('K5', $rejected);

        $sheet->getStyle("J2:K5")->applyFromArray($styleInfoGrafis);
        $sheet->getStyle("J2:J5")->applyFromArray($styleTitleInfoGrafis);
        $sheet->getStyle("K2:K5")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);

        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header("Content-Disposition: attachment;filename=" . "TRX. COACHING SESSION - " . ReportController::$event . ".xlsx");
        header('Cache-Control: max-age=0');
        $writer->save('php://output');
        exit();
    }

    public function printCCVerif()
    {
        switch (request('periode')) {
            case 'EB':
                ReportController::$event = "Early Bird";
                break;
            case 'NORMAL':
                ReportController::$event = "Normal Registration";
                break;
        }

        $req = ['periode', 'status'];
        $transactions = CCTransaction::filter(request($req))->orderBy('updated_at', 'asc')->get();
        $totalData = count($transactions);


        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->getColumnDimension('G')->setAutoSize(true);
        $sheet->getColumnDimension('J')->setAutoSize(true);

        $info = "A1:G3";
        $header = "A5:G5";
        $counter = 6;
        $content = "A6:G" . $totalData + 6;
        $contentAmount = "G6:G" . $totalData + 6;
        $contentDate = "E6:F" . $totalData + 1;
        $contentTotalBalance = "A" . $totalData + 6 . ":" . "F" . $totalData + 6;

        // Konten Header
        $sheet->setCellValue('A5', 'No.');
        $sheet->setCellValue('B5', 'Nama Peserta (First Member)');
        $sheet->setCellValue('C5', 'Nama Akun');
        $sheet->setCellValue('D5', 'Nomor Rekening');
        $sheet->setCellValue('E5', 'Tanggal Daftar');
        $sheet->setCellValue('F5', 'Tanggal Bayar');
        $sheet->setCellValue('G5', 'Jumlah Bayar');


        // Data
        foreach ($transactions as $transaction) {
            $sheet->setCellValue("A$counter", $counter - 5);
            $sheet->setCellValue("B$counter", $transaction->cc_participant->full_name);
            $sheet->setCellValue("C$counter", $transaction->account_name);
            $sheet->setCellValueExplicit("D$counter", $transaction->account_number, DataType::TYPE_STRING);
            $sheet->setCellValue("E$counter", date_format($transaction->created_at, "d M Y, H:i"));
            $sheet->setCellValue("F$counter", date_format($transaction->updated_at, "d M Y, H:i"));
            $sheet->setCellValue("G$counter", $transaction->amount);
            $counter++;
        }

        $styleHeader = [
            'font' => [
                'bold' => true,
                'size' => 14
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['argb' => 'FFFFFF00']
            ],
        ];

        $styleContent = [
            'font' => [
                "size" => 12
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
        ];

        $styleContentAmount = [
            'font' => [
                "bold" => true
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_RIGHT,
            ],
        ];

        $styleContentTotalBalance = [
            'font' => [
                "bold" => true,
                'size' => 14
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => '33cc33']
            ],
        ];

        $styleContentInfo = [
            'font' => [
                "bold" => true,
                'size' => 16
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => 'ff9966']
            ],
        ];

        // Informasi
        $currentDateTime = date_format(Carbon::now(), "d M Y, H:i");
        $sheet->mergeCells($info);
        $sheet->setCellValue("A1", "DATA TRANSAKSI COACHING CLINIC - " . ReportController::$event . " Per $currentDateTime WIB");
        $sheet->getStyle($info)->applyFromArray($styleContentInfo);

        $sheet->getStyle($header)->applyFromArray($styleHeader);
        $sheet->getStyle($content)->applyFromArray($styleContent);
        $sheet->getStyle($contentAmount)->applyFromArray($styleContentAmount);
        $sheet->getStyle($contentDate)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

        // Total Balance
        $sheet->mergeCells($contentTotalBalance);
        $sheet->getStyle($contentAmount)->getNumberFormat()->setFormatCode('_-* #,##0');
        $sheet->setCellValue("A" . $totalData + 6, "Total Pendapatan");
        $sheet->setCellValue("G" . $totalData + 6, "=SUM(G6:G" . $totalData + 5 . ")");
        $sheet->getStyle($contentTotalBalance)->applyFromArray($styleContentTotalBalance);


        // Total Peserta Yang Ikut

        $styleTitleInfoGrafis = [
            'font' => [
                "bold" => true,
                'size' => 13
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => 'ff9966']
            ],
        ];

        $styleInfoGrafis = [
            'font' => [
                "bold" => true,
                'size' => 12
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000']
                ]
            ],
        ];

        $total = count(CCTransaction::where('status_periode', request('periode'))->get());
        $sheet->setCellValue('J2', "Total Peserta");
        $sheet->setCellValue('K2', $total);

        $sheet->setCellValue('J4', "Diterima");
        $sheet->setCellValue('K4', $totalData);

        request()->merge([
            "status" => "PENDING",
        ]);
        $menunggu = count(CCTransaction::filter(request($req))->get());
        $sheet->setCellValue('J3', "Menunggu");
        $sheet->setCellValue('K3', $menunggu);

        request()->merge([
            "status" => "REJECTED",
        ]);
        $rejected = count(CCTransaction::filter(request($req))->get());
        $sheet->setCellValue('J5', "Ditolak");
        $sheet->setCellValue('K5', $rejected);

        $sheet->getStyle("J2:K5")->applyFromArray($styleInfoGrafis);
        $sheet->getStyle("J2:J5")->applyFromArray($styleTitleInfoGrafis);
        $sheet->getStyle("K2:K5")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);

        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header("Content-Disposition: attachment;filename=" . "TRX. COACHING CLINIC - " . ReportController::$event . ".xlsx");
        header('Cache-Control: max-age=0');
        $writer->save('php://output');
        exit();
    }
}
