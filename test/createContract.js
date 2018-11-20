import {GXClient} from "../lib";

const private_key = "";
const account_id = "1.2.19";
let client = new GXClient(private_key, account_id, "ws://47.96.164.78:28090");

let code = "0061736d0100000001671160017f0060037f7f7f006000006000017f60027f7f017f60027f7f0060037f7f7f017f60027f7f017e6000017e60047e7e7e7e017f60047e7e7e7e0060047f7e7f7f0060067e7e7e7e7f7f017f60037e7e7e0060047f7f7e7f0060047f7f7f7f0060017f017f02ea021203656e760561626f7274000203656e7610616374696f6e5f646174615f73697a65000303656e761063757272656e745f7265636569766572000803656e760b64625f66696e645f693634000903656e760a64625f6765745f693634000603656e760b64625f6e6578745f693634000403656e760d64625f72656d6f76655f693634000003656e760c64625f73746f72655f693634000c03656e760d64625f7570646174655f693634000b03656e760e6765745f6163636f756e745f6964000703656e76176765745f616374696f6e5f61737365745f616d6f756e74000803656e76136765745f616374696f6e5f61737365745f6964000803656e760e6765745f7472785f73656e646572000803656e760f6772617068656e655f617373657274000503656e76066d656d637079000603656e76076d656d6d6f7665000603656e7610726561645f616374696f6e5f64617461000403656e760e77697468647261775f6173736574000a0326250404040d0004010404050405040e050e04040f050e0e0e0505100410001000000500040602040501700103030503010001077608066d656d6f72790200165f5a6571524b3131636865636b73756d32353653315f0012165f5a6571524b3131636865636b73756d31363053315f0013165f5a6e65524b3131636865636b73756d31363053315f0014056170706c790015066d616c6c6f63002b0466726565002e066d656d636d7000350909010041000b033616180ac050250b002000200141201035450b0b002000200141201035450b0d0020002001412010354100470bd50201067f4100410028020441d0006b2208360204024020012000520d00200841306a2001370300200841386a427f370300200841c0006a4200370300200841c8006a4100360200200820013703282008200137032002400240200242808080e0cd9bb5d963510d0020024280808080b287d3d5ca00520d012008410036021c2008410136021820082008290318370200200841206a200810171a0c010b200841003602142008410236021020082008290310370208200841206a200841086a10191a0b200841c0006a2802002203450d0002400240200841c4006a220628020022072003460d000340200741686a220728020021042007410036020002402004450d00024020042802082205450d002004410c6a2005360200200510300b200410300b20032007470d000b200841c0006a28020021070c010b200321070b20062003360200200710300b4100200841d0006a3602040bef0302027e067f4100410028020441306b2208360204100a21022008100b220142ffffffffffff3f8337032820082002370320200242ffffffffffffffff3f7c42ffffffffffffffffff00544110100d2008100c22023703180240200041246a2802002207200041206a2802002203460d00200741686a2106410020036b2104034020062802002903002002510d0120062107200641686a22052106200520046a4168470d000b0b200041086a21040240024002400240024020072003460d00200741686a2802002207280214200446419001100d20070d010c020b200041086a290300200041106a2903004280808080f2a9d388322002100322064100480d0120042006101e2207280214200446419001100d0b200728020822002106024020002007410c6a2802002205460d00200021060340200641086a2903002001510d012005200641106a2206470d000b200521060b2008200620006b41047522063b0108200641ffff0371200520006b4104754f0d012008200841206a3602142008200841086a3602104101419002100d200420074200200841106a10270c020b2008200841206a3602142008200841186a360210200841086a20042002200841106a10260c010b2008200841206a3602104101419002100d200420074200200841106a10280b4100200841306a3602040b8c0101047f4100280204220521042001280204210220012802002101024010012203450d00024020034180044d0d002003102b2205200310101a2005102e0c010b410020052003410f6a4170716b22053602042005200310101a0b200020024101756a210302402002410171450d00200328020020016a28020021010b200320011100004100200436020441010bcd0402027e067f4100410028020441106b220a3602040240024020012d000022094101710d0020094101762109200141016a21010c010b20012802042109200128020821010b2001200910092203423f88a741017341f000100d100c21040240200041246a2802002208200041206a2802002206460d00200841686a2101410020066b2107034020012802002903002004510d0120012108200141686a22092101200920076a4168470d000b0b200041086a21050240024020082006460d00200841686a2802002207280214200546419001100d0c010b41002107200041086a290300200041106a2903004280808080f2a9d388322004100322014100480d0020052001101e2207280214200546419001100d0b2007410047220641d001100d200a4100360204200a20072802082201360200024020012007410c6a2802002208460d00200241086a290300210441012109024003402004200141086a290300510d01200a2009360204200a200141106a2201360200200941016a210920082001470d000c020b0b2001290300200229030022045941f001100d024020042001290300520d00200a200a3602082006419002100d200520074200200a41086a101f2007410c6a280200200741086a280200470d01200641c002100d200641f002100d02402007280218200a41086a100522014100480d0020052001101e1a0b2005200710200c010b200a200236020c200a200a41046a3602082006419002100d200520074200200a41086a10210b20002903002003200241086a290300200229030010114100200a41106a3602040bd50201037f4100410028020441c0006b220436020420042203200036022c200320012802003602202003200128020436022441002101024010012200450d00024002402000418104490d002000102b21010c010b410020042000410f6a4170716b22013602040b2001200010101a0b200341186a2204420037030020034100360208200342003703002003420037031041014110100d20032001360234200320013602302003200120006a360238200341306a2003101a1a200328023820032802346b41074b41d000100d200341106a20032802344108100e1a2003200328023441086a2202360234200328023820026b41074b41d000100d200420032802344108100e1a02402000418104490d002001102e0b2003200341206a36023420032003412c6a360230200341306a2003101b024020032d0000410171450d00200341086a28020010300b4100200341c0006a36020441010bb40301067f4100410028020441206b220736020420074100360218200742003703102000200741106a101c1a0240024002400240024002400240024002402007280214220520072802102204470d0020012d00004101710d01200141003b0100200141086a21040c020b200741086a410036020020074200370300200520046b220241704f0d072002410b4f0d02200720024101743a00002007410172210620020d030c040b200128020841003a000020014100360204200141086a21040b2001410010322004410036020020014200370200200728021022040d030c040b200241106a4170712205102f21062007200541017236020020072006360208200720023602040b20022103200621050340200520042d00003a0000200541016a2105200441016a21042003417f6a22030d000b200620026a21060b200641003a00000240024020012d00004101710d00200141003b01000c010b200128020841003a0000200141003602040b200141001032200141086a200741086a2802003602002001200729030037020020072802102204450d010b20072004360214200410300b4100200741206a36020420000f0b20071031000b9c0203017f017e017f4100410028020441e0006b2204360204200441206a200110341a200441106a41086a2202200141186a29030037030020042001290310370310200441306a41086a20022903003703002004200429031037033020002802002802002000280204220128020422024101756a21002001280200210102402002410171450d00200028020020016a28020021010b200441d0006a200441206a10341a200441c0006a41086a200441306a41086a2903002203370300200441086a2003370300200420042903302203370340200420033703002000200441d0006a20042001110100024020042d0050410171450d00200428025810300b024020042d0020410171450d00200428022810300b4100200441e0006a3602040b830203047f017e017f200028020421054100210742002106200041086a2102200041046a21030340200520022802004941e000100d200328020022052d000021042003200541016a2205360200200441ff0071200741ff0171220774ad2006842106200741076a210720044107760d000b024002402006a7220320012802042207200128020022046b22024d0d002001200320026b101d200041046a2802002105200141046a2802002107200128020021040c010b200320024f0d00200141046a200420036a22073602000b200041086a28020020056b200720046b22054f41d000100d2004200041046a22072802002005100e1a2007200728020020056a36020020000bad0201057f0240024002400240024020002802082202200028020422066b20014f0d002006200028020022056b220320016a2204417f4c0d0241ffffffff0721060240200220056b220241feffffff034b0d0020042002410174220620062004491b2206450d020b2006102f21020c030b200041046a21000340200641003a00002000200028020041016a22063602002001417f6a22010d000c040b0b41002106410021020c010b20001033000b200220066a2104200220036a220521060340200641003a0000200641016a21062001417f6a22010d000b2005200041046a2203280200200028020022016b22026b2105024020024101480d00200520012002100e1a200028020021010b2000200536020020032006360200200041086a20043602002001450d00200110300f0b0b850403037f017e047f410028020441306b220921084100200936020402402000411c6a280200220720002802182202460d00410020026b2103200741686a21060340200641106a2802002001460d0120062107200641686a22042106200420036a4168470d000b0b0240024020072002460d00200741686a28020021060c010b20014100410010042206411f7641017341e006100d024002402006418104490d002006102b21040c010b410020092006410f6a4170716b22043602040b20012004200610041a20082004360224200820043602202008200420066a2207360228024020064180044d0d002004102e200841286a2802002107200828022421040b4120102f220641003602102006420037020820062000360214200720046b41074b41d000100d200620044108100e1a2008200441086a360224200841206a200641086a10231a200620013602182008200636021820082006290300220537031020082006280218220736020c024002402000411c6a22012802002204200041206a2802004f0d00200420053703082004200736021020084100360218200420063602002001200441186a3602000c010b200041186a200841186a200841106a2008410c6a10240b20082802182104200841003602182004450d00024020042802082207450d002004410c6a2007360200200710300b200410300b4100200841306a36020420060bff0204017e037f017e037f410028020441106b220b210a4100200b3602042001280214200046419003100d200029030010025141c003100d20012903002204210802402001410c6a22092802002003280200280200220341106a22076b22054104752206450d00200320072005100f1a200129030021080b2009200320064104746a360200200420085141e004100d41082103200141086a210620092802002209200128020822076b2205410475ad21080340200341016a2103200842078822084200520d000b024020072009460d00200541707120036a21030b024002402003418104490d002003102b21090c010b4100200b2003410f6a4170716b22093602040b200a2009360200200a200920036a360208200341074a41a005100d200920014108100e1a200a200941086a360204200a200610221a2001280218200220092003100802402003418104490d002009102e0b024020042000290310540d00200041106a427e200442017c2004427d561b3703000b4100200a41106a3602040b800302017e067f200128021420004641b005100d200029030010025141e005100d02402000411c6a2205280200220720002802182203460d0020012903002102410020036b2106200741686a2108034020082802002903002002510d0120082107200841686a22042108200420066a4168470d000b0b200720034741a006100d200741686a210802400240200720052802002204460d00410020046b2103200821070340200741186a2208280200210620084100360200200728020021042007200636020002402004450d00024020042802082206450d002004410c6a2006360200200610300b200410300b200741106a200741286a280200360200200741086a200741206a29030037030020082107200820036a4168470d000b2000411c6a28020022072008460d010b0340200741686a220728020021042007410036020002402004450d00024020042802082206450d002004410c6a2006360200200610300b200410300b20082007470d000b0b2000411c6a2008360200200128021810060b9f0304017e047f017e027f410028020441106b220b210a4100200b3602042001280214200046419003100d200029030010025141c003100d20012903002104200128020820032802002802004104746a22082903082003280204220329030851418004100d2008200829030020032903007d22093703002009428080808080808080405541a004100d2008290300428080808080808080c0005341c004100d200420012903005141e004100d41082108200141086a21052001410c6a2802002203200128020822066b2207410475ad21090340200841016a2108200942078822094200520d000b024020062003460d00200741707120086a21080b024002402008418104490d002008102b21030c010b4100200b2008410f6a4170716b22033602040b200a2003360200200a200320086a360208200841074a41a005100d200320014108100e1a200a200341086a360204200a200510221a2001280218200220032008100802402008418104490d002003102e0b024020042000290310540d00200041106a427e200442017c2004427d561b3703000b4100200a41106a3602040ba70203027f017e037f4100410028020441106b2207360204200128020420012802006b410475ad210420002802042105200041086a210203402004a721032007200442078822044200522206410774200341ff0071723a000f200228020020056b41004a41a005100d200041046a22032802002007410f6a4101100e1a2003200328020041016a220536020020060d000b024020012802002206200141046a2802002201460d00200041046a21030340200041086a220228020020056b41074a41a005100d200328020020064108100e1a2003200328020041086a2205360200200228020020056b41074a41a005100d2003280200200641086a4108100e1a2003200328020041086a2205360200200641106a22062001470d000b0b4100200741106a36020420000bd20203037f017e027f200028020421074100210642002105200041086a2102200041046a21030340200720022802004941e000100d200328020022072d000021042003200741016a2207360200200441ff0071200641ff0171220674ad2005842105200641076a210620044107760d000b0240024002402005a7220420012802042202200128020022076b41047522064d0d002001200420066b102520012802002207200141046a2802002202470d010c020b0240200420064f0d00200141046a200720044104746a22023602000b20072002460d010b200041046a220428020021060340200041086a220328020020066b41074b41d000100d200720042802004108100e1a2004200428020041086a2206360200200328020020066b41074b41d000100d200741086a20042802004108100e1a2004200428020041086a2206360200200741106a22072002470d000b0b20000bc50301047f024002402000280204200028020022066b41186d220441016a220541abd5aad5004f0d0041aad5aad500210702400240200028020820066b41186d220641d4aad52a4b0d0020052006410174220720072005491b2207450d010b200741186c102f21060c020b41002107410021060c010b20001033000b20012802002105200141003602002006200441186c6a2201200536020020012002290300370308200120032802003602102006200741186c6a2104200141186a210502400240200041046a280200220620002802002207460d000340200641686a2202280200210320024100360200200141686a2003360200200141786a200641786a280200360200200141746a200641746a280200360200200141706a200641706a280200360200200141686a21012002210620072002470d000b200041046a2802002107200028020021020c010b200721020b20002001360200200041046a2005360200200041086a2004360200024020072002460d000340200741686a220728020021012007410036020002402001450d00024020012802082206450d002001410c6a2006360200200610300b200110300b20022007470d000b0b02402002450d00200210300b0bed0201057f02400240024002400240024020002802082202200028020422066b41047520014f0d002006200028020022056b410475220320016a22044180808080014f0d0241ffffffff0021060240200220056b220241047541feffff3f4b0d0020042002410375220620062004491b2206450d0220064180808080014f0d040b2006410474102f21020c040b200041046a21000340200642003703082006420037030041014110100d2000200028020041106a22063602002001417f6a22010d000c050b0b41002106410021020c020b20001033000b1000000b200220064104746a2104200220034104746a220521060340200642003703082006420037030041014110100d200641106a21062001417f6a22010d000b2005200041046a2203280200200028020022016b22026b2105024020024101480d00200520012002100e1a200028020021010b2000200536020020032006360200200041086a20043602002001450d00200110300f0b0ba80201047f4100410028020441306b2207360204200720023703282001290300100251418007100d20072003360214200720013602102007200741286a3602184120102f220341003602102003420037020820032001360214200741106a2003102a2007200336022020072003290300220237031020072003280218220436020c024002402001411c6a22062802002205200141206a2802004f0d00200520023703082005200436021020074100360220200520033602002006200541186a3602000c010b200141186a200741206a200741106a2007410c6a10240b2000200336020420002001360200200728022021032007410036022002402003450d00024020032802082201450d002003410c6a2001360200200110300b200310300b4100200741306a3602040b9f0304017e047f017e027f410028020441106b220b210a4100200b3602042001280214200046419003100d200029030010025141c003100d20012903002104200128020820032802002f01004104746a22082903082003280204220329030851418004100d2008200829030020032903007c22093703002009428080808080808080405541a004100d2008290300428080808080808080c0005341c004100d200420012903005141e004100d41082108200141086a21052001410c6a2802002203200128020822066b2207410475ad21090340200841016a2108200942078822094200520d000b024020062003460d00200741707120086a21080b024002402008418104490d002008102b21030c010b4100200b2008410f6a4170716b22033602040b200a2003360200200a200320086a360208200841074a41a005100d200320014108100e1a200a200341086a360204200a200510221a2001280218200220032008100802402008418104490d002003102e0b024020042000290310540d00200041106a427e200442017c2004427d561b3703000b4100200a41106a3602040b970304017e047f017e027f410028020441106b220a210b4100200a3602042001280214200046419003100d200029030010025141c003100d2003280200210320012903002104024002402001410c6a22082802002205200141106a2802004f0d0020052003290300370300200541086a200341086a2903003703002008200828020041106a360200200141086a21080c010b200141086a2208200310290b200420012903005141e004100d2001410c6a2802002205200828020022066b2207410475ad2109410821030340200341016a2103200942078822094200520d000b024020062005460d00200741707120036a21030b024002402003418104490d002003102b210a0c010b4100200a2003410f6a4170716b220a3602040b200b200a360200200b200a20036a360208200341074a41a005100d200a20014108100e1a200b200a41086a360204200b200810221a20012802182002200a2003100802402003418104490d00200a102e0b024020042000290310540d00200041106a427e200442017c2004427d561b3703000b4100200b41106a3602040b9f0201067f02400240024020002802042206200028020022056b410475220241016a22034180808080014f0d0041ffffffff00210402400240200028020820056b220741047541feffff3f4b0d0020032007410375220420042003491b2204450d0120044180808080014f0d030b2004410474102f2107200041046a2802002106200028020021050c030b41002104410021070c020b20001033000b1000000b200720024104746a22032001290300370300200341086a200141086a2903003703002003200620056b22016b2106200720044104746a2104200341106a2103024020014101480d00200620052001100e1a200028020021050b20002006360200200041046a2003360200200041086a200436020002402005450d00200510300b0b9d0303057f017e037f410028020441106b220a21094100200a3602042001200028020422062802002903003703002000280200210220062802042106024002402001410c6a22032802002208200141106a2802004f0d0020082006290300370300200841086a200641086a2903003703002003200328020041106a2208360200200141086a21050c010b200141086a220520061029200328020021080b2008200528020022036b2204410475ad2107410821060340200641016a2106200742078822074200520d000b024020032008460d00200441707120066a21060b024002402006418104490d002006102b21080c010b4100200a2006410f6a4170716b22083602040b200920083602002009200820066a360208200641074a41a005100d200820014108100e1a2009200841086a3602042009200510221a200120022903084280808080f2a9d3883220002802082903002001290300220720082006100736021802402006418104490d002008102e0b024020072002290310540d00200241106a427e200742017c2007427d561b3703000b4100200941106a3602040b090041b4072000102c0bb904010c7f02402001450d00024020002802c041220d0d004110210d200041c0c1006a41103602000b200141086a200141046a41077122026b200120021b210202400240024020002802c441220a200d4f0d002000200a410c6c6a4180c0006a21010240200a0d0020004184c0006a220d2802000d0020014180c000360200200d20003602000b200241046a210a034002402001280208220d200a6a20012802004b0d002001280204200d6a220d200d28020041808080807871200272360200200141086a22012001280200200a6a360200200d200d28020041808080807872360200200d41046a22010d030b2000102d22010d000b0b41fcffffff0720026b2104200041c8c1006a210b200041c0c1006a210c20002802c8412203210d03402000200d410c6c6a22014180c0006a210620014184c0006a280200220541046a210d0340200520062802006a2107200d417c6a2208280200220941ffffffff07712101024020094100480d000240200120024f0d000340200d20016a220a20074f0d01200a280200220a4100480d012001200a41ffffffff07716a41046a22012002490d000b0b20082001200220012002491b200941808080807871723602000240200120024d0d00200d20026a200420016a41ffffffff07713602000b200120024f0d040b200d20016a41046a220d2007490d000b41002101200b4100200b28020041016a220d200d200c280200461b220d360200200d2003470d000b0b20010f0b2008200828020041808080807872360200200d0f0b41000b870501087f20002802c44121010240024041002d008049450d0041002802844921070c010b3f002107410041013a008049410020074110742207360284490b200721030240024002400240200741ffff036a41107622023f0022084d0d00200220086b40001a4100210820023f00470d0141002802844921030b41002108410020033602844920074100480d0020002001410c6c6a210220074180800441808008200741ffff037122084181f8034922061b6a2008200741ffff077120061b6b20076b2107024041002d0080490d003f002103410041013a008049410020034110742203360284490b20024180c0006a210220074100480d01200321060240200741076a417871220520036a41ffff036a41107622083f0022044d0d00200820046b40001a20083f00470d0241002802844921060b4100200620056a360284492003417f460d0120002001410c6c6a22014184c0006a2802002206200228020022086a2003460d020240200820014188c0006a22052802002201460d00200620016a2206200628020041808080807871417c20016b20086a72360200200520022802003602002006200628020041ffffffff07713602000b200041c4c1006a2202200228020041016a220236020020002002410c6c6a22004184c0006a200336020020004180c0006a220820073602000b20080f0b02402002280200220820002001410c6c6a22034188c0006a22012802002207460d0020034184c0006a28020020076a2203200328020041808080807871417c20076b20086a72360200200120022802003602002003200328020041ffffffff07713602000b2000200041c4c1006a220728020041016a22033602c0412007200336020041000f0b2002200820076a36020020020b7b01037f024002402000450d0041002802f44822024101480d0041b4c70021032002410c6c41b4c7006a21010340200341046a2802002202450d010240200241046a20004b0d00200220032802006a20004b0d030b2003410c6a22032001490d000b0b0f0b2000417c6a2203200328020041ffffffff07713602000b3f01027f02402000410120001b2201102b22020d00034041002102410028028849220041003a00002000450d0120001102002001102b2202450d000b0b20020b0e0002402000450d002000102e0b0b05001000000be20201067f0240200141704f0d00410a2102024020002d00002205410171450d0020002802002205417e71417f6a21020b0240024020054101710d00200541fe017141017621030c010b200028020421030b410a2104024020032001200320014b1b2201410b490d00200141106a417071417f6a21040b024020042002460d00024002402004410a470d0041012106200041016a210120002802082102410021070c010b200441016a102f21010240200420024b0d002001450d020b024020002d000022054101710d0041012107200041016a2102410021060c010b2000280208210241012106410121070b0240024020054101710d00200541fe017141017621050c010b200028020421050b0240200541016a2205450d00200120022005100e1a0b02402006450d00200210300b02402007450d0020002003360204200020013602082000200441016a4101723602000f0b200020034101743a00000b0f0b1000000b05001000000bba0101037f20004200370200200041086a22034100360200024020012d00004101710d00200020012902003702002003200141086a28020036020020000f0b02402001280204220341704f0d00200128020821020240024002402003410b4f0d00200020034101743a0000200041016a210120030d010c020b200341106a4170712204102f21012000200441017236020020002001360208200020033602040b200120022003100e1a0b200120036a41003a000020000f0b1000000b4901037f4100210502402002450d000240034020002d0000220320012d00002204470d01200141016a2101200041016a21002002417f6a22020d000c020b0b200320046b21050b20050b0300000b0be106170041040b04906400000041100b316d61676e6974756465206f6620617373657420616d6f756e74206d757374206265206c657373207468616e20325e3632000041d0000b0572656164000041e0000b04676574000041f0000b20696e76616c6964206163636f756e745f6e616d6520746f5f6163636f756e7400004190010b336f626a6563742070617373656420746f206974657261746f725f746f206973206e6f7420696e206d756c74695f696e646578000041d0010b136f776e657220686173206e6f206173736574000041f0010b1362616c616e6365206e6f7420656e6f75676800004190020b2363616e6e6f74207061737320656e64206974657261746f7220746f206d6f64696679000041c0020b2263616e6e6f74207061737320656e64206974657261746f7220746f206572617365000041f0020b1e63616e6e6f7420696e6372656d656e7420656e64206974657261746f7200004190030b2e6f626a6563742070617373656420746f206d6f64696679206973206e6f7420696e206d756c74695f696e646578000041c0030b3363616e6e6f74206d6f64696679206f626a6563747320696e207461626c65206f6620616e6f7468657220636f6e747261637400004180040b13646966666572656e742061737365745f6964000041a0040b167375627472616374696f6e20756e646572666c6f77000041c0040b157375627472616374696f6e206f766572666c6f77000041e0040b3b757064617465722063616e6e6f74206368616e6765207072696d617279206b6579207768656e206d6f64696679696e6720616e206f626a656374000041a0050b067772697465000041b0050b2d6f626a6563742070617373656420746f206572617365206973206e6f7420696e206d756c74695f696e646578000041e0050b3263616e6e6f74206572617365206f626a6563747320696e207461626c65206f6620616e6f7468657220636f6e7472616374000041a0060b35617474656d707420746f2072656d6f7665206f626a656374207468617420776173206e6f7420696e206d756c74695f696e646578000041e0060b176572726f722072656164696e67206974657261746f7200004180070b3363616e6e6f7420637265617465206f626a6563747320696e207461626c65206f6620616e6f7468657220636f6e747261637400";
let abi = {
    "version": "gxc::abi/1.0",
    "types": [],
    "structs": [{
        "name": "account",
        "base": "",
        "fields": [{"name": "owner", "type": "uint64"}, {"name": "balances", "type": "contract_asset[]"}]
    }, {"name": "deposit", "base": "", "fields": []}, {
        "name": "withdraw",
        "base": "",
        "fields": [{"name": "to_account", "type": "string"}, {"name": "amount", "type": "contract_asset"}]
    }],
    "actions": [{"name": "deposit", "type": "deposit", "payable": true}, {
        "name": "withdraw",
        "type": "withdraw",
        "payable": false
    }],
    "tables": [{
        "name": "account",
        "index_type": "i64",
        "key_names": ["owner"],
        "key_types": ["uint64"],
        "type": "account"
    }],
    "error_messages": [],
    "abi_extensions": []
};

client.createContract("bank-test3", code, abi, "0", "0", true).then(result => {
    console.log(JSON.stringify(result, null, "  "));
}).catch(ex => {
    console.error(ex);
});
