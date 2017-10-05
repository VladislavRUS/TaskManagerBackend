package com.taskmanager;

import com.taskmanager.models.Damper;
import com.taskmanager.models.ResearchDetail;
import org.apache.poi.xwpf.usermodel.*;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTblLayoutType;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTcPr;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STTblLayoutType;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STVerticalJc;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Артём on 25.04.2017.
 */
public class NomenclatureTable extends DetailsComplexionTable {

    public NomenclatureTable(List<Damper> dampers, List<ResearchDetail> researchDetails) throws IOException {
        document = new XWPFDocument();
        out = new FileOutputStream(new File("nomenclature_table.docx"));

        changeOrientationA4();

        createPageHeader(document);
        renderTables(dampers, researchDetails);

        finish();
    }

    private void createPageHeader(XWPFDocument title) {
        XWPFParagraph paragraphOne = title.createParagraph();
        paragraphOne.setAlignment(ParagraphAlignment.CENTER);
        paragraphOne.setSpacingAfter(0);

        XWPFRun runOne = paragraphOne.createRun();
        runOne.setFontSize(14);
        runOne.setFontFamily("Times New Roman");
        runOne.setBold(true);
        runOne.setUnderline(UnderlinePatterns.SINGLE);
        runOne.setText("Участок ЭУ и СНИУ");

        XWPFParagraph nomenclature = title.createParagraph();
        nomenclature.setSpacingAfter(0);
        nomenclature.setAlignment(ParagraphAlignment.CENTER);
        XWPFRun nomenclatureRun = nomenclature.createRun();
        nomenclatureRun.setFontSize(14);
        nomenclatureRun.setFontFamily("Times New Roman");
        nomenclatureRun.setCapitalized(true);
        nomenclatureRun.setBold(true);
        nomenclatureRun.setText("Номенклатура");

        XWPFParagraph paragraphThree = title.createParagraph();
        paragraphThree.setAlignment(ParagraphAlignment.CENTER);
        XWPFRun paragraphThreeRun = paragraphThree.createRun();
        paragraphThreeRun.setFontSize(14);
        paragraphThreeRun.setFontFamily("Times New Roman");

        paragraphThreeRun.setText("военной продукции, подлежащей контролю качества и приемке");
        paragraphThreeRun.addBreak();
        paragraphThreeRun.setText("5 военного представительства Министерства обороны Российской Федерации на 2017 год");
    }

    @Override
    protected void finish() throws IOException {
        document.write(out);
        out.close();
        System.out.println("nomenclature_table.docx written successfully");
    }

    protected void renderTables(List<Damper> dampers, List<ResearchDetail> researchDetails) {
        XWPFTable table = createHeaderTable("");
        renderContent(table, dampers, researchDetails);
        //renderContent(table, FactoryEquipments.getAllEquipments());
        // здесь вроде бы надо дописать заполнение всей таблицы, но т.к. данная таблица имеет ячейки 1:1 (нету смёрженных),
        // то это просто пробежать в for-e
        // короче переопределить renderContent()
    }


    protected void renderContent(XWPFTable table, List<Damper> dampers, List<ResearchDetail> researchDetails) {
        int countRow = 0;
        XWPFTableRow currentRow;

        for (int i = 0; i < researchDetails.size(); i++) {
            table.createRow();

            ResearchDetail currentResearchDetail = researchDetails.get(i);
            currentRow = table.getRow(4 + i);

            //setFont(currentRow.getCell(0), String.valueOf(i + 1), 14);
            setFontWithAlignment(currentRow.getCell(0), false, false, String.valueOf(i + 1), 14, null);
            //setSingleLineSpacing(currentRow.getCell(0).getParagraphs().get(0));

            setFont(currentRow.getCell(1), currentResearchDetail.getName(), 14);
            setFont(currentRow.getCell(2), currentResearchDetail.getVendor(), 14);
            setFont(currentRow.getCell(3), currentResearchDetail.getCustomer(), 14);
            setFont(currentRow.getCell(4), currentResearchDetail.getHead(), 14);
            setFont(currentRow.getCell(5), currentResearchDetail.getContract(), 14);
            setFont(currentRow.getCell(6), currentResearchDetail.getRequirements(), 14);

            for (int j = 0; j < 7; j++) {
                setSingleLineSpacing(currentRow.getCell(j).getParagraphs().get(0));
            }
        }

        table.createRow();
        XWPFTableRow secondNumbersRow = table.getRow(4 + researchDetails.size());
        for (int i = 0; i < 7; i++) {
            setFontWithAlignment(secondNumbersRow.getCell(i), false, false, String.valueOf(i + 1), 14, null);
            setSingleLineSpacing(secondNumbersRow.getCell(i).getParagraphs().get(0));
        }

        table.createRow();
        mergeCellHorizontally(table, 5 + researchDetails.size(), 0, 6);
        XWPFTableRow secondHeaderRow = table.getRow(5 + researchDetails.size());
        setFontWithAlignment(secondHeaderRow.getCell(0), true, false, "1. Серийное производство", 14, null);
        setSingleLineSpacing(secondHeaderRow.getCell(0).getParagraphs().get(0));

        for (int i = 0; i < dampers.size(); i++) {
            table.createRow();

            Damper currentDamper = dampers.get(i);

            System.out.println(currentDamper.getName());

            currentRow = table.getRow(6 + researchDetails.size() + i);

            //setFont(currentRow.getCell(0), String.valueOf(i + 1), 14);

            setFontWithAlignment(currentRow.getCell(0), false, false, String.valueOf(i + 1), 14, null);

            setFont(currentRow.getCell(1), currentDamper.getName(), 14);
            setFont(currentRow.getCell(2), currentDamper.getVendor(), 14);
            setFont(currentRow.getCell(3), currentDamper.getCustomer(), 14);
            setFont(currentRow.getCell(4), currentDamper.getHead(), 14);
            setFont(currentRow.getCell(5), currentDamper.getContract(), 14);
            setFont(currentRow.getCell(6), currentDamper.getDesignation(), 14);

            for (int j = 0; j < 7; j++) {
                setSingleLineSpacing(currentRow.getCell(j).getParagraphs().get(0));
            }
        }

        XWPFRun runBreak = document.createParagraph().createRun();
        runBreak.addBreak();
    }

    @Override
    protected XWPFTable createHeaderTable(String title) {
        XWPFTable table = document.createTable(4, 7);
        table.setCellMargins(20, 100, 20, 100); // отступы внутри ячеек таблицы
        XWPFTableRow rowOne = table.getRow(0);
        XWPFTableRow rowTwo = table.getRow(1);
        XWPFTableRow rowThree = table.getRow(2);
        XWPFTableRow rowFor = table.getRow(3);

        // Настройки размеров таблицы и шапки таблицы
        //table.getCTTbl().addNewTblPr().addNewTblW().setW(BigInteger.valueOf(17000));
        CTTcPr tcPr = CTTcPr.Factory.newInstance();
        tcPr.addNewTcW().setW(BigInteger.valueOf(1100));
        rowOne.getCell(0).getCTTc().setTcPr(tcPr);

        tcPr = CTTcPr.Factory.newInstance();
        tcPr.addNewTcW().setW(BigInteger.valueOf(3800));
        rowOne.getCell(1).getCTTc().setTcPr(tcPr);

        tcPr = CTTcPr.Factory.newInstance();
        tcPr.addNewTcW().setW(BigInteger.valueOf(2000));
        rowOne.getCell(2).getCTTc().setTcPr(tcPr);

        tcPr = CTTcPr.Factory.newInstance();
        tcPr.addNewTcW().setW(BigInteger.valueOf(4000));
        rowOne.getCell(3).getCTTc().setTcPr(tcPr);
        setSingleLineSpacing(rowOne.getCell(3).getParagraphs().get(0));

        tcPr = CTTcPr.Factory.newInstance();
        tcPr.addNewTcW().setW(BigInteger.valueOf(2000));
        rowTwo.getCell(3).getCTTc().setTcPr(tcPr);
        setSingleLineSpacing(rowTwo.getCell(3).getParagraphs().get(0)); // убираем межстрочные интервалы
        setSingleLineSpacing(rowTwo.getCell(4).getParagraphs().get(0)); // убираем межстрочные интервалы

        tcPr = CTTcPr.Factory.newInstance();
        tcPr.addNewTcW().setW(BigInteger.valueOf(2000));
        rowOne.getCell(5).getCTTc().setTcPr(tcPr);

        tcPr = CTTcPr.Factory.newInstance();
        tcPr.addNewTcW().setW(BigInteger.valueOf(2400));
        rowOne.getCell(6).getCTTc().setTcPr(tcPr);

        CTTblLayoutType type = table.getCTTbl().getTblPr().addNewTblLayout();
        type.setType(STTblLayoutType.FIXED);


        // Мёрж ячеек в шапке таблицы
        mergeCellVertically(table, 0, 0, 1);
        mergeCellVertically(table, 1, 0, 1);
        mergeCellVertically(table, 2, 0, 1);

        mergeCellHorizontally(table, 0, 3, 4);

        mergeCellVertically(table, 5, 0, 1);
        mergeCellVertically(table, 6, 0, 1);

        // Настройка стиля и текста для первой строки
        setFontWithAlignment(rowOne.getCell(0), false, true, "№№ п.п.", 14, STVerticalJc.TOP);
        setFontWithAlignment(rowOne.getCell(1), false, true, "Наименование и индекс продукции", 14, STVerticalJc.TOP);
        setFontWithAlignment(rowOne.getCell(2), false, true, "Предприятие-изготовитель (разработчик) продукции", 14, STVerticalJc.TOP);
        setFontWithAlignment(rowOne.getCell(3), false, true, "Заказчики, в интересах которых контролируется продукция ВП МО", 14, STVerticalJc.TOP);
        setFontWithAlignment(rowOne.getCell(5), false, true, "Основание для контроля продукции ВП МО", 14, STVerticalJc.TOP);
        setFontWithAlignment(rowOne.getCell(6), false, true, "Наименование конструкторского (технического) документа, требованиям которого должна соответствовать контролируемая продукция", 14, STVerticalJc.TOP);

        // Настройка стиля и текста для второй строки
        setFontWithAlignment(rowTwo.getCell(3), false, true, "Генеральный заказчик, в чьих интересах контролирует-ся продукция ВП МО", 14, STVerticalJc.TOP);
        setFontWithAlignment(rowTwo.getCell(4), false, true, "Предприятие, являющееся головным, по отношению к предприятию, указанному в графе 3", 14, STVerticalJc.TOP);

        // Настройка стиля и текста для третьей строки
        for (int i = 0; i < 7; i++) {
            setFontWithAlignment(rowThree.getCell(i), false, false, String.valueOf(i + 1), 14, null);
            setSingleLineSpacing(rowThree.getCell(i).getParagraphs().get(0));
        }

        mergeCellHorizontally(table, 3, 0, 6);
        setFontWithAlignment(rowFor.getCell(0), true, false, "1. Научно-исследовательские и опытно-конструкторские работы", 14, null);
        setSingleLineSpacing(rowFor.getCell(0).getParagraphs().get(0));

        return table;
    }


}
