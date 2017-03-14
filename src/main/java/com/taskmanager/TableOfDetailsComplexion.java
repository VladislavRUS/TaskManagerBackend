package com.taskmanager;

import org.apache.poi.xwpf.usermodel.*;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.*;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.util.List;

/**
 * Created by Артём on 14.02.2017.
 */
public class TableOfDetailsComplexion {
    private XWPFDocument document;
    private FileOutputStream out;

    public TableOfDetailsComplexion(List<com.taskmanager.models.Damper> list) throws IOException {
        document = new XWPFDocument();
        File file = new File("Export.docx");

        if(!file.exists())
            file.createNewFile();

        out = new FileOutputStream(file);

        changeOrientationA4();
        createFirstPage(document);
        XWPFTable table = createHeaderTable();
        renderContent(table, list);
        createLastPage(document);

        finish();
    }

    private void finish() throws IOException {
        getDocument().write(out);
        getOut().close();
        System.out.println("create_table.docx written successfully");
    }

    private void createFirstPage(XWPFDocument title) {
        XWPFParagraph paragraphOne = title.createParagraph();
        XWPFRun runOne = paragraphOne.createRun();
        runOne.setFontSize(14);
        runOne.setFontFamily("Times New Roman");

        runOne.setText("      СОГЛАСОВАНО                                                                                                                                   УТВЕРЖДАЮ\n       " +
                "Начальник 5ВП МО РФ                                                                                                                  Первый проректор-проректор\n              " +
                "\t\t\t                                                                                                                                    по науке и инновациям\n" +
                "_____________________ А.Ю. Галкин                                                                                              Самарского университета\n" +
                "«____» _______________ 2017 г.                                                                                            ________________ А.Б. Прокофьев\n" +
                "\t\t\t\t                                                                                                                   «____» _______________ 2017 г.");
        runOne.addBreak();
        runOne.addBreak();
        runOne.addBreak();
        runOne.addBreak();
        runOne.addBreak();
        runOne.addBreak();
        runOne.addBreak();
        runOne.addBreak();

        XWPFParagraph paragraphTwo = title.createParagraph();
        paragraphTwo.setAlignment(ParagraphAlignment.CENTER);

        XWPFRun runTwo = paragraphTwo.createRun();
        runTwo.setBold(true);
        runTwo.setFontSize(14);
        runTwo.setFontFamily("Times New Roman");
        runTwo.setText("ПЕРЕЧЕНЬ");
        runTwo.addBreak();

        XWPFRun runThree = paragraphTwo.createRun();
        runThree.setFontSize(14);
        runThree.setFontFamily("Times New Roman");
        runThree.setText("комплектующих деталей, материалов, подлежащих входному контролю");
        // переходы на новые строкич
        runThree.addBreak();
        runThree.addBreak();
        runThree.addBreak();
        runThree.addBreak();
        runThree.addBreak();
        runThree.addBreak();
        runThree.addBreak();
        runThree.addBreak();
        runThree.addBreak();
        runThree.addBreak();
        runThree.addBreak();


        XWPFRun runFor = paragraphTwo.createRun();
        runFor.setFontSize(14);
        runFor.setFontFamily("Times New Roman");
        runFor.setText("Самара 2017");
    }

    private void createLastPage(XWPFDocument document) {
        XWPFParagraph paragraphOne = document.createParagraph();
        XWPFRun run = paragraphOne.createRun();
        run.setFontSize(14);
        run.setFontFamily("Times New Roman");

        run.setText("Руководитель участка ЭО и СНИУ                                                                 Главный инженер ОНИЛ-1 Самарского университета\n");

        run.addBreak();
        run.addBreak();
        run = paragraphOne.createRun();
        run.setFontSize(14);
        run.setFontFamily("Times New Roman");

        run.setText("_______________________ А.А. Наследов                                                     ____________________ Ф.В. Паровай\n");

        run.addBreak();
        run.addBreak();
        run = paragraphOne.createRun();
        run.setFontSize(14);
        run.setFontFamily("Times New Roman");
        run.setText("Заместитель начальника 5 ВП МО РФ                                                            Заместитель главного конструктора ОНИЛ-1\n");

        run.addBreak();
        run.addBreak();
        run = paragraphOne.createRun();
        run.setFontSize(14);
        run.setFontFamily("Times New Roman");
        run.setText("_______________________ А.В. Кравченко                                                    ____________________ Д.П. Давыдов");
        run.addBreak();




        paragraphOne = document.createParagraph();
        paragraphOne.setIndentationLeft(8800);
        XWPFRun runLAst = paragraphOne.createRun();

        runLAst.setFontSize(14);
        runLAst.setFontFamily("Times New Roman");
        runLAst.setText("\t                                                      Согласовано:\n" +
                    "\t\t\t\t                                                                                       Начальник отдела стандартизации, метрологии и\n" +
                    "\t\t\t\t                                                                                       технического контроля Самарского университета\n");

        runLAst.addBreak();
        runLAst.addBreak();

        runLAst = paragraphOne.createRun();
        runLAst.setFontSize(14);
        runLAst.setFontFamily("Times New Roman");
        runLAst.setText("\t\t\t\t                                                                                       _______________________ В.Г. Никифоров");
    }

    private XWPFTable createHeaderTable() {

        XWPFTable table = getDocument().createTable(2, 10);
        table.setCellMargins(20, 100, 50, 100); // отступы внутри ячеек таблицы
        XWPFTableRow rowOne = table.getRow(0);
        XWPFTableRow rowTwo = table.getRow(1);

        // Настройки размеров таблицы и шапки таблицы
        rowOne.setHeight(1120 * 3);
        table.getCTTbl().addNewTblPr().addNewTblW().setW(BigInteger.valueOf(15000));


        for (int i = 5; i < 10; i++) {
            CTTcPr tcPr = CTTcPr.Factory.newInstance();
            tcPr.addNewTextDirection().setVal(STTextDirection.BT_LR);
            tcPr.addNewTcW().setW(BigInteger.valueOf(11500));
            rowOne.getCell(i).getCTTc().setTcPr(tcPr);
        }

        setFont(rowOne.getCell(5), "Вид контроля, объём выборки, контрольные нормативы и правила выборочного контроля");
        setFont(rowOne.getCell(6), "Средства измерений необходимые для контроля параметров изделий");
        setFont(rowOne.getCell(7), "Гарантийный срок хранения");
        setFont(rowOne.getCell(8), "Указания о маркировке изделий по результатам входного контроля");
        setFont(rowOne.getCell(9), "Примечание");

        setFontWithAlignment(rowOne.getCell(0), false, true, "№№ п.п.");
        setFontWithAlignment(rowOne.getCell(1), false, true, "Наименование, обозначение виброизолятора и ТУ");
        setFontWithAlignment(rowOne.getCell(2), false, true, "Наименование, обозначение, марка и тип контролируемых комплектующих изделий");
        setFontWithAlignment(rowOne.getCell(3), false, true, "Обозначение основных КД, ТД, стандартов и ТУ, требованиям которым должны соответствовать изделия");
        setFontWithAlignment(rowOne.getCell(4), false, true, "Состав контролируемых параметров изделий, методов их проверки или пункты НД, в которых они установлены");

        for (int i = 0; i < 10; i++)
            setFontWithAlignment(rowTwo.getCell(i), true, false, String.valueOf(i + 1));


        // Настройка высоты для второй линии
        CTRow ctRow = rowTwo.getCtRow();///getTrPr().getTrHeightArray(0).setHRule(STHeightRule.AUTO);

        CTTrPr tcPrRow = CTTrPr.Factory.newInstance();
        tcPrRow.addNewTrHeight().setVal(BigInteger.valueOf(300));

        ctRow.setTrPr(tcPrRow);
        rowTwo.getCtRow().getTrPr().getTrHeightArray(0).setHRule(STHeightRule.EXACT);

        return table;
    }

    private void setFont(XWPFTableCell cell, String font) {
        XWPFRun run = cell.getParagraphs().get(0).createRun();
        run.setFontSize(11);
        run.setFontFamily("Times New Roman");
        run.setText(font);
    }

    private void setFontWithAlignment(XWPFTableCell cell, boolean bold, boolean isVAlignment, String font) {
        XWPFRun run = cell.getParagraphs().get(0).createRun();
        run.setFontSize(11);
        run.setFontFamily("Times New Roman");
        run.setText(font);
        run.setBold(bold);

        // Горизонтальное выравнивание
        cell.getParagraphs().get(0).setAlignment(ParagraphAlignment.CENTER);
        //cell.getParagraphs().get(0).setVerticalAlignment(TextAlignment.AUTO); ---- > не работает :(

        if (isVAlignment) {
            // Вертикальное выравнивание
            CTTcPr tcPr = cell.getCTTc().addNewTcPr();
            // set vertical alignment to "center"
            CTVerticalJc va = tcPr.addNewVAlign();
            va.setVal(STVerticalJc.CENTER);
        }
    }


    private XWPFDocument getDocument() {
        return document;
    }

    private FileOutputStream getOut() {
        return out;
    }

    private void changeOrientationA4() {
        CTDocument1 doc = document.getDocument();
        CTBody body = doc.getBody();

        if (!body.isSetSectPr()) {
            body.addNewSectPr();
        }
        CTSectPr section = body.getSectPr();

        if (!section.isSetPgSz()) {
            section.addNewPgSz();
        }
        CTPageSz pageSize = section.getPgSz();
        pageSize.setOrient(STPageOrientation.LANDSCAPE);

        // Размеры страницы А4
        pageSize.setW(BigInteger.valueOf(16840));
        pageSize.setH(BigInteger.valueOf(11900));

        CTSectPr sectPr = document.getDocument().getBody().addNewSectPr();
        CTPageMar pageMar = sectPr.addNewPgMar();

        // Поля страницы
        pageMar.setLeft(BigInteger.valueOf(1000L));
        pageMar.setRight(BigInteger.valueOf(720L));
    }

    private void renderContent(XWPFTable table, List<com.taskmanager.models.Damper> list) {
        int countRow = 0; // число комплектующих в виброизоляторе
        XWPFTableRow currentRow;

        for (int i = 0; i < list.size(); i++) {
            for (int j = 0; j < list.get(i).getAccessories().size(); j++) {
                table.createRow();

                // заполнение ячеек
                setFont(table.getRow(j + 2 + countRow).getCell(2), list.get(i).getAccessories().get(j).getName());
                setFont(table.getRow(j + 2 + countRow).getCell(3), list.get(i).getAccessories().get(j).getDesignation());

                // удаление интервала между абзацами
                setSingleLineSpacing(table.getRow(j + 2 + countRow).getCell(2).getParagraphs().get(0));
                setSingleLineSpacing(table.getRow(j + 2 + countRow).getCell(3).getParagraphs().get(0));
            }
            countRow += list.get(i).getAccessories().size();

            // Слияние ячеек в строке
            for (int z = 0; z < 10; z++)
                if (z == 2 || z == 3)
                    continue;
                else
                    mergeCellVertically(table, z, countRow - list.get(i).getAccessories().size() + 2, countRow + 1);

            // заполнение смёрженных ячеек
            currentRow = table.getRow(countRow - list.get(i).getAccessories().size() + 2);
            setFont(currentRow.getCell(0), String.valueOf(i + 1));
            setFont(currentRow.getCell(1), String.valueOf(list.get(i).getName()));
            setFont(currentRow.getCell(4), String.valueOf(list.get(i).getInspectionMethods()));
            setFont(currentRow.getCell(5), String.valueOf(list.get(i).getControlType()));
            setFont(currentRow.getCell(6), String.valueOf(list.get(i).getMeasurementMeans()));
            setFont(currentRow.getCell(7), String.valueOf(list.get(i).getGuarantee()));
            setFont(currentRow.getCell(8), String.valueOf(list.get(i).getFiatLabeling()));
            setFont(currentRow.getCell(9), String.valueOf(list.get(i).getNote()));

        }

		XWPFRun runBreak = document.createParagraph().createRun();
        runBreak.addBreak();
        runBreak.addBreak();
        runBreak.addBreak();
    }

    private void setSingleLineSpacing(XWPFParagraph para) {
        CTPPr ppr = para.getCTP().getPPr();
        if (ppr == null) ppr = para.getCTP().addNewPPr();
        CTSpacing spacing = ppr.isSetSpacing() ? ppr.getSpacing() : ppr.addNewSpacing();
        spacing.setAfter(BigInteger.valueOf(0));
        spacing.setBefore(BigInteger.valueOf(0));
        spacing.setLineRule(STLineSpacingRule.AUTO);

        spacing.setAfterLines(BigInteger.valueOf(0));
        spacing.setBeforeLines(BigInteger.valueOf(0));
    }

    private void mergeCellVertically(XWPFTable table, int col, int fromRow, int toRow) {

        if (fromRow == toRow)
            return;

        for (int rowIndex = fromRow; rowIndex <= toRow; rowIndex++) {

            CTVMerge vmerge = CTVMerge.Factory.newInstance();
            if (rowIndex == fromRow) {
                // The first merged cell is set with RESTART merge value
                vmerge.setVal(STMerge.RESTART);
            } else {
                // Cells which join (merge) the first one, are set with CONTINUE
                vmerge.setVal(STMerge.CONTINUE);
            }

            XWPFTableCell cell = table.getRow(rowIndex).getCell(col);
            // Try getting the TcPr. Not simply setting an new one every time.
            CTTcPr tcPr = cell.getCTTc().getTcPr();
            if (tcPr != null) {
                tcPr.setVMerge(vmerge);
            } else {
                // only set an new TcPr if there is not one already
                tcPr = CTTcPr.Factory.newInstance();
                tcPr.setVMerge(vmerge);
                //tcPr.setTextDirection(new CTTextDirectionImpl(CTTextDirection.type));
                //CTTextDirection
                cell.getCTTc().setTcPr(tcPr);
            }
        }
    }
}
