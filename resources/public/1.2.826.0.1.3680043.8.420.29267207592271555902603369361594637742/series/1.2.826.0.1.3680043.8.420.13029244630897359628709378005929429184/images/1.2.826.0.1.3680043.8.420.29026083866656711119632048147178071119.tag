<%--
  ~ Copyright (c) Dilvan A. Moreira 2016. All rights reserved.
  ~
  ~  This file is part of ePAD2.
  ~
  ~  ePAD2 is free software: you can redistribute it and/or modify
  ~  it under the terms of the GNU General Public License as published by
  ~  the Free Software Foundation, either version 3 of the License, or
  ~  (at your option) any later version.
  ~
  ~  Foobar is distributed in the hope that it will be useful,
  ~  but WITHOUT ANY WARRANTY; without even the implied warranty of
  ~  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  ~  GNU General Public License for more details.
  ~
  ~  You should have received a copy of the GNU General Public License
  ~  along with ePAD2.  If not, see <http://www.gnu.org/licenses/>.
  --%>

132:(0002,0000) UL #4 [196] Group Length
144:(0002,0001) OB #2 [00\01] File Meta Information Version
158:(0002,0002) UI #26 [1.2.840.10008.5.1.4.1.1.2] Media Storage SOP Class UID
192:(0002,0003) UI #64 [1.2.826.0.1.3680043.8.420.29026083866656711119632048147178071119] Media Storage SOP Instance UID
264:(0002,0010) UI #20 [1.2.840.10008.1.2.1] Transfer Syntax UID
292:(0002,0012) UI #18 [1.2.40.0.13.1.1.1] Implementation Class UID
318:(0002,0013) SH #14 [dcm4che-1.4.31] Implementation Version Name
340:(0008,0005) CS #10 [ISO_IR 100] Specific Character Set
358:(0008,0008) CS #22 [ORIGINAL\PRIMARY\AXIAL] Image Type
388:(0008,0016) UI #26 [1.2.840.10008.5.1.4.1.1.2] SOP Class UID
422:(0008,0018) UI #64 [1.2.826.0.1.3680043.8.420.29026083866656711119632048147178071119] SOP Instance UID
494:(0008,0020) DA #8 [20060812] Study Date
510:(0008,0021) DA #8 [20060812] Series Date
526:(0008,0022) DA #8 [20060812] Acquisition Date
542:(0008,0023) DA #8 [20060812] Content Date
558:(0008,0030) TM #6 [000018] Study Time
572:(0008,0031) TM #6 [000342] Series Time
586:(0008,0032) TM #6 [000427] Acquisition Time
600:(0008,0033) TM #6 [001817] Content Time
614:(0008,0050) SH #8 [3041900] Accession Number
630:(0008,0060) CS #2 [CT] Modality
640:(0008,0070) LO #18 [GE MEDICAL SYSTEMS] Manufacturer
666:(0008,0090) PN #10 [BladderCTP] Referring Physician's Name
684:(0008,1010) SH #8 [BLADDER] Station Name
700:(0008,1030) LO #16 [CT THORAX W CON] Study Description
724:(0008,1032) SQ #-1 Procedure Code Sequence
736:>(FFFE,E000) #-1 Item
744:>(0008,0100) SH #4 [CTT+] Code Value
756:>(0008,0102) SH #6 [GEIIS] Coding Scheme Designator
770:>(0008,0103) SH #2 [0] Coding Scheme Version
780:>(0008,0104) LO #20 [CT THORAX W CONTRAST] Code Meaning
808:>(FFFE,E00D) #0 Item Delimitation Item
816:>(FFFE,E0DD) #0 Sequence Delimitation Item
824:(0008,103E) LO #14 [Recon 2: CHEST] Series Description
846:(0009,0010) LO #4 [CTP] Private Creator Data Element
858:(0009,0011) LO #6 [GEIIS] Private Creator Data Element
872:(0010,0010) PN #16 [AJB-1-265-338089] Patient's Name
896:(0010,0020) LO #40 [338089146142790150429846112194538233781] Patient ID
944:(0010,0021) LO #12 [DiRaC Study] Issuer of Patient ID
964:(0010,0030) DA #8 [19780116] Patient's Birth Date
980:(0010,0040) CS #2 [M] Patient's Sex
990:(0010,1010) AS #4 [026Y] Patient's Age
1002:(0018,0010) LO #6 [OMN350] Contrast/Bolus Agent
1016:(0018,0022) CS #12 [HELICAL MODE] Scan Options
1036:(0018,0050) DS #8 [1.250000] Slice Thickness
1052:(0018,0060) DS #4 [120] KVP
1064:(0018,0090) DS #10 [500.000000] Data Collection Diameter
1082:(0018,1020) LO #28 [LightSpeedApps308I.2_H3.1M5] Software Version(s)
1118:(0018,1030) LO #24 [5.1 ROUTINE CHEST+++++++] Protocol Name
1150:(0018,1040) LO #2 [IV] Contrast/Bolus Route
1160:(0018,1100) DS #10 [360.000000] Reconstruction Diameter
1178:(0018,1110) DS #10 [949.075012] Distance Source to Detector
1196:(0018,1111) DS #10 [541.000000] Distance Source to Patient
1214:(0018,1120) DS #8 [0.000000] Gantry/Detector Tilt
1230:(0018,1130) DS #10 [133.500000] Table Height
1248:(0018,1140) CS #2 [CW] Rotation Direction
1258:(0018,1150) IS #4 [554] Exposure Time
1270:(0018,1151) IS #4 [440] X-Ray Tube Current
1282:(0018,1152) IS #4 [5246] Exposure
1294:(0018,1160) SH #12 [BODY FILTER] Filter Type
1314:(0018,1170) IS #6 [52800] Generator Power
1328:(0018,1190) DS #8 [1.200000] Focal Spot(s)
1344:(0018,1210) SH #4 [BONE] Convolution Kernel
1356:(0018,5100) CS #4 [FFS] Patient Position
1368:(0019,0010) LO #12 [GEMS_ACQU_01] Private Creator Data Element
1388:(0020,000D) UI #64 [1.2.826.0.1.3680043.8.420.29267207592271555902603369361594637742] Study Instance UID
1460:(0020,000E) UI #64 [1.2.826.0.1.3680043.8.420.13029244630897359628709378005929429184] Series Instance UID
1532:(0020,0010) SH #6 [48284] Study ID
1546:(0020,0011) IS #2 [3] Series Number
1556:(0020,0012) IS #2 [1] Acquisition Number
1566:(0020,0013) IS #4 [160] Instance Number
1578:(0020,0032) DS #36 [-153.800003\-180.000000\-254.750000] Image Position (Patient)
1622:(0020,0037) DS #54 [1.000000\0.000000\0.000000\0.000000\1.000000\0.000000] Image Orientation (Patient)
1684:(0020,0052) UI #62 [1.2.840.113619.2.55.1.1762892763.2254.1155118948.697.14568.0.1] Frame of Reference UID
1754:(0020,1040) LO #2 [SN] Position Reference Indicator
1764:(0020,1041) DS #12 [-254.750000] Slice Location
1784:(0021,0010) LO #12 [GEMS_RELA_01] Private Creator Data Element
1804:(0023,0010) LO #12 [GEMS_STDY_01] Private Creator Data Element
1824:(0027,0010) LO #12 [GEMS_IMAG_01] Private Creator Data Element
1844:(0028,0002) US #2 [1] Samples per Pixel
1854:(0028,0004) CS #12 [MONOCHROME2] Photometric Interpretation
1874:(0028,0010) US #2 [512] Rows
1884:(0028,0011) US #2 [512] Columns
1894:(0028,0030) DS #18 [0.703125\0.703125] Pixel Spacing
1920:(0028,0100) US #2 [16] Bits Allocated
1930:(0028,0101) US #2 [16] Bits Stored
1940:(0028,0102) US #2 [15] High Bit
1950:(0028,0103) US #2 [1] Pixel Representation
1960:(0028,0120) SS #2 [-2000] Pixel Padding Value
1970:(0028,1050) DS #2 [40] Window Center
1980:(0028,1051) DS #4 [400] Window Width
1992:(0028,1052) DS #6 [-1024] Rescale Intercept
2006:(0028,1053) DS #2 [1] Rescale Slope
2016:(0043,0010) LO #12 [GEMS_PARM_01] Private Creator Data Element
2036:(0045,0010) LO #14 [GEMS_HELIOS_01] Private Creator Data Element
2058:(0903,0010) LO #10 [GEIIS PACS] Private Creator Data Element
2076:(0905,0010) LO #6 [GEIIS] Private Creator Data Element
2090:(7FD1,0010) LO #6 [GEIIS] Private Creator Data Element
2104:(7FE0,0010) OW #524288 [63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536\63536
