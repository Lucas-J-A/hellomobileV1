import {Container, Row, Image, ListGroup } from 'react-bootstrap'
import styles from '../src/styles/privacidade.module.css'
import Link from 'next/link';


function TermosPrivacidade() {
    return (
        <Container id="privacidade" className={`mx-auto mt-5 align-items-center ${styles.privacidade}`}>
            <Row className="mt-5 mx-auto mt-5 text-dark align-items-center">
                <h3 className="text-center mt-2 mt-3">Termos de Privacidade</h3>
                <span className="text-center"> A Hello, no papel de Controladora de dados, dispõe aos clientes a Política de privacidade abaixo. </span>
                <ListGroup as="ol" numbered variant="flush" className="mt-5">
                    <ListGroup.Item as="li"
                                    className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
            
                        <div id="Informacoes-Gerais" className="ms-2 me-auto">
                            <div >
                                <h5>Informações gerais</h5>
                            </div>
                            <Container>
                                <p className={`text-muted ${styles.textoPrivacidade}`}>A presente <b>Política de Privacidade</b> contém informações a respeito do modo como tratamos, total ou parcialmente, de forma automatizada ou não, os dados pessoais dos usuários que acessam nosso aplicativo. Seu objetivo é esclarecer os interessados acerca dos tipos de dados que são coletados, dos motivos da coleta e da forma como o usuário poderá atualizar, gerenciar ou excluir estas informações. </p>

                                <p className={`text-muted ${styles.textoPrivacidade}`}>Esta Política de Privacidade foi elaborada em conformidade com a Lei Federal n. 12.965 de 23 de abril de 2014 (Marco Civil da Internet), com a Lei Federal n. 13.709, de 14 de agosto de 2018 (Lei de Proteção de Dados Pessoais) e com o Regulamento UE n. 2016/679 de 27 de abril de 2016 (Regulamento Geral Europeu de Proteção de Dados Pessoais - RGDP). </p>

                                <p className={`text-muted ${styles.textoPrivacidade}`}>Esta Política de Privacidade poderá ser atualizada em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.</p>
                            </Container>
                        </div>
            
                    </ListGroup.Item>
                <ListGroup.Item as="li"
                                className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
                    <div className="ms-2 me-auto">
                        <div><h5>Direitos do usuário</h5></div>
                    <Container>
                        <p className={`text-muted ${styles.textoPrivacidade}`}>
                        <b className={`text-muted ${styles.textoPrivacidadeTitle}`}> 2.1 O aplicativo se compromete a cumprir as normas previstas no RGPD, em respeito aos seguintes princípios: </b><br />
                    
                    - Os dados pessoais do usuário serão processados de forma lícita, leal e transparente (licitude, lealdade e transparência); <br />
                    - Os dados pessoais do usuário serão coletados apenas para finalidades determinadas, explícitas e legítimas, não podendo ser tratados posteriormente de uma forma incompatível com essas finalidades (limitação das finalidades); <br />
                    - Os dados pessoais do usuário serão coletados de forma adequada, pertinente e limitada às necessidades do objetivo para os quais eles são processados (minimização dos dados); <br />
                    - Os dados pessoais do usuário serão exatos e atualizados sempre que necessário, de maneira que os dados inexatos sejam apagados ou retificados quando possível (exatidão);<br /> 
                    - Os dados pessoais do usuário serão conservados de uma forma que permita a identificação dos titulares dos dados apenas durante o período necessário para as finalidades para as quais são tratados (limitação da conservação); <br />
                    - Os dados pessoais do usuário serão tratados de forma segura, protegidos do tratamento não autorizado ou ilícito e contra a sua perda, destruição ou danificação acidental, adotando as medidas técnicas ou organizativas adequadas (integridade e confidencialidade).</p>

                <p className={`text-muted ${styles.textoPrivacidade}`}>
                <b className={`text-muted ${styles.textoPrivacidadeTitle}`}> 2.2 O usuário do aplicativo possui os seguintes direitos, conferidos pela Lei de Proteção de Dados Pessoais e pelo RGPD: </b> <br />
                
                    - Direito de confirmação e acesso: é o direito do usuário de obter do aplicativo a confirmação de que os dados pessoais que lhe digam respeito são ou não objeto de tratamento e, se for esse o caso, o direito de acessar os seus dados pessoais; <br />
                    - Direito de retificação: é o direito do usuário de obter do aplicativo, sem demora injustificada, a retificação dos dados pessoais inexatos que lhe digam respeito; <br />
                    - Direito à eliminação dos dados (direito ao esquecimento): é o direito do usuário de ter seus dados apagados do aplicativo; <br />
                    - Direito à limitação do tratamento dos dados: é o direito do usuário de limitar o tratamento de seus dados pessoais, podendo obtê-la quando contesta a exatidão dos dados, quando o tratamento for ilícito, quando o aplicativo não precisar mais dos dados para as finalidades propostas e quando tiver se oposto ao tratamento dos dados e em caso de tratamento de dados desnecessários; <br />
                    - Direito de oposição: é o direito do usuário de, a qualquer momento, se opor por motivos relacionados com a sua situação particular, ao tratamento dos dados pessoais que lhe digam respeito, podendo se opor ainda ao uso de seus dados pessoais para definição de perfil de marketing (profiling); <br />
                    - Direito de portabilidade dos dados: é o direito do usuário de receber os dados pessoais que lhe digam respeito e que tenha fornecido ao aplicativo, num formato estruturado, de uso corrente e de leitura automática, e o direito de transmitir esses dados a outro aplicativo; <br />
                    - Direito de não ser submetido a decisões automatizadas: é o direito do usuário de não ficar sujeito a nenhuma decisão tomada exclusivamente com base no tratamento automatizado, incluindo a definição de perfis (profiling), que produza efeitos na sua esfera jurídica ou que o afete significativamente de forma similar. <br />
                </p>
                <p className={`text-muted ${styles.textoPrivacidade}`}>
                <b className={`text-muted ${styles.textoPrivacidadeTitle}`}> 2.3 O usuário poderá exercer os seus direitos por meio de comunicação escrita enviada ao aplicativo com o assunto &quot; RGDP- &quot;, especificando: </b> <br />
                - Nome completo ou razão social, número do CPF (Cadastro de Pessoas Físicas, da Receita Federal do Brasil) ou CNPJ (Cadastro Nacional de Pessoa Jurídica, da Receita Federal do Brasil) e endereço de e-mail do usuário e, se for o caso, do seu representante; <br />
                - Direito que deseja exercer junto ao aplicativo; <br />
                - Data do pedido e assinatura do usuário; <br />
                - Todo documento que possa demonstrar ou justificar o exercício de seu direito. <br />
                </p>
                <p className={`text-muted ${styles.textoPrivacidade}`}>
                O pedido deverá ser enviado ao e-mail: contato@hellocelular.com.br,<br /> ou por correio, ao seguinte endereço: <br />
                Hello Telecom Ltda <br />
                Avenida Regente Feijó, 944 - 11 andar lado A sala 1105/1106, CEP: 03342-000, São Paulo, SP, Brasil <br />
                CNPJ 33.193.820/0001-04 <br />
                Inscrição municipal: 6.225.473.1 <br />
                Inscrição estadual isenta<br />
                O usuário será informado em caso de retificação ou eliminação dos seus dados.</p>
                </Container>
            </div>
        </ListGroup.Item>
      <ListGroup.Item as="li"
        className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
            <div className="ms-2 me-auto">
                <div><h5>Dever de não fornecer dados de terceiros</h5></div>
                <Container>
                <p className={`text-muted ${styles.textoPrivacidade}`}>
                Durante a utilização do site, a fim de resguardar e de proteger os direitos de terceiros, o usuário do aplicativo deverá fornecer somente seus dados pessoais, e não os de terceiros. </p>
                </Container>
            
            </div>
        </ListGroup.Item>
      <ListGroup.Item as="li"
        className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
            <div className="ms-2 me-auto">
                <div><h5 >Coleta de Informações</h5></div>
                    <Container>
                <p className={`text-muted ${styles.textoPrivacidadeTitle}`}><b>4.1. Tipos de dados coletados</b></p>   
                <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}><b className={`text-muted ${styles.textoPrivacidadeTitle}`}>Dados de identificação do usuário para realização de cadastro </b> <br />
                A utilização, pelo usuário, de determinadas funcionalidades do aplicativo dependerá de cadastro, sendo que, nestes casos, os seguintes dados do usuário serão coletados e armazenados: <br />
- nome <br />
- endereço de e-mail <br />
- endereço postal <br />
- detalhes de redes sociais <br />
- número de telefone <br />
- número de CPF <br />
- número de CNPJ <br />
                </p>
                
                <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                <b className={`text-muted ${styles.textoPrivacidadeTitle}`}>Dados relacionados à execução de contratos firmados com o usuário</b> <br />
                
                Para a execução de contrato de compra e venda ou de prestação de serviços eventualmente firmado entre o aplicativo e o usuário, poderão ser coletados e armazenados outros dados relacionados ou necessários a sua execução, incluindo o teor de eventuais comunicações tidas com o usuário. 
                </p>
                <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                <b className={`text-muted ${styles.textoPrivacidadeTitle}`}>Registro de acesso</b> <br />
                
                    Em atendimento às disposições do art. 15, caput e parágrafos, da Lei Federal n. 12.965/2014 (Marco Civil da Internet), os registros de acesso do usuário serão coletados e armazenados por, pelo menos, seis meses. 
                </p>
                <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                <b className={`text-muted ${styles.textoPrivacidadeTitle}`}>Newsletter</b> <br />
                
                    O endereço de e-mail cadastrado pelo usuário que optar por se inscrever em nossa Newsletter será coletado e armazenado até que o usuário solicite seu descadastro.
                </p>
                <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                <b className={`text-muted ${styles.textoPrivacidadeTitle}`}>Dados Sensíveis</b> <br />
                
                    <b>Não serão coletados dados sensíveis dos usuários</b>, assim entendidos aqueles definidos nos arts. 9º e 10 do RGPD e nos arts. 11 e seguintes da Lei de Proteção de Dados Pessoais. Assim, dentre outros, não haverá coleta dos seguintes dados: <br />
                    
- dados que revelem a origem racial ou étnica, as opiniões políticas, as convicções religiosas ou filosóficas, ou a filiação sindical do usuário; <br />
- dados genéticos;<br />
- dados biométricos para identificar uma pessoa de forma inequívoca;<br />
- dados relativos à saúde do usuário;<br />
- dados relativos à vida sexual ou à orientação sexual do usuário;<br />
- dados relacionados a condenações penais ou a infrações ou com medidas de segurança conexas.  
              </p>
              <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
              <b className={`text-muted ${styles.textoPrivacidadeTitle}`}>Coleta de dados não previstos expressamente</b> <br />
                
                    Eventualmente, outros tipos de dados não previstos expressamente nesta Política de Privacidade poderão ser coletados, desde que sejam fornecidos com o consentimento do usuário, ou, ainda, que a coleta seja permitida ou imposta por lei.
                </p>
                <p className={`text-muted ${styles.textoPrivacidadeTitle}`}><b>4.2.Fundamento jurídico para o tratamento dos dados pessoais</b></p>   
                <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}> Ao utilizar os serviços do aplicativo, o usuário está consentindo com a presente Política de Privacidade. <br />
                    O usuário tem o direito de retirar seu consentimento a qualquer momento, não comprometendo a licitude do tratamento de seus dados pessoais antes da retirada. <br />
                    A retirada do consentimento poderá ser feita pelo e-mail: contato@hellocelular.com.br, ou por correio enviado ao seguinte endereço: <br />
                    Hello Telecom Ltda <br />
                    Avenida Regente Feijó, 944 - 11 andar lado A sala 1105/1106, CEP: 03342-000, São Paulo, SP, Brasil <br />
                    CNPJ 33.193.820/0001-04 <br />
                    Inscrição municipal: 6.225.473.1 <br />
                    Inscrição estadual isenta <br />
                    <br />
                    O consentimento dos relativamente ou absolutamente incapazes, especialmente de crianças menores de 16 (dezesseis) anos, apenas poderá ser feito, respectivamente, se devidamente assistidos ou representados. <br />
                    Poderão ainda ser coletados dados pessoais necessários para a execução e cumprimento dos serviços contratados pelo usuário no aplicativo. <br />
                    O tratamento de dados pessoais sem o consentimento do usuário apenas será realizado em razão de interesse legítimo ou para as hipóteses previstas em lei, ou seja, dentre outras, as seguintes: <br />
                    - para o cumprimento de obrigação legal ou regulatória pelo controlador; <br />
                    - para a realização de estudos por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;<br />
                    - quando necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o usuário, a pedido do titular dos dados;<br />
                    - para o exercício regular de direitos em processo judicial, administrativo ou arbitral, esse último nos termos da Lei nº 9.307, de 23 de setembro de 1996 (Lei de Arbitragem);<br />
                    - para a proteção da vida ou da incolumidade física do titular dos dados ou de terceiro;<br />
                    - para a tutela da saúde, em procedimento realizado por profissionais da área da saúde ou por entidades sanitárias;<br />
                    - quando necessário para atender aos interesses legítimos do controlador ou de terceiro, exceto no caso de prevalecerem direitos e liberdades fundamentais do titular dos dados que exijam a proteção dos dados pessoais;<br />
                    - para a proteção do crédito, inclusive quanto ao disposto na legislação pertinente.
                    </p>
                    <p className={`text-muted ${styles.textoPrivacidadeTitle}`}><b>4.3. Finalidades do tratamento dos dados pessoais
                    </b></p>   
                        <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                        Os dados pessoais do usuário coletados pelo aplicativo têm por finalidade facilitar, agilizar e cumprir os compromissos estabelecidos com o usuário e a fazer cumprir as solicitações realizadas por meio do preenchimento de formulários. <br />
                        <br />
Os dados pessoais poderão ser utilizados também com uma finalidade comercial, para personalizar o conteúdo oferecido ao usuário, bem como para dar subsídio ao aplicativo para a melhora da qualidade e funcionamento de seus serviços. <br />
<br />
Os dados de cadastro serão utilizados para permitir o acesso do usuário a determinados conteúdos do aplicativo, exclusivos para usuários cadastrados.<br />
<br />
A coleta de dados relacionados ou necessários à execução de um contrato de compra e venda ou de prestação de serviços eventualmente firmado com o usuário terá a finalidade de conferir às partes segurança jurídica, além de facilitar e viabilizar a conclusão do negócio. <br />
<br />
O tratamento de dados pessoais para finalidades não previstas nesta Política de Privacidade somente ocorrerá mediante comunicação prévia ao usuário, sendo que, em qualquer caso, os direitos e obrigações aqui previstos permanecerão aplicáveis. <br />
                        </p>
                    <p className={`text-muted ${styles.textoPrivacidadeTitle}`}><b>4.4. Prazo de conservação dos dados pessoais
                    </b></p>   
                        <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                        Os dados pessoais do usuário serão conservados por um período não superior ao exigido para cumprir os objetivos em razão dos quais eles são processados.<br />
                        <br />
                        O período de conservação dos dados são definidos de acordo com os seguintes critérios:<br />
                        <br />
                        Os dados pessoais serão armazenados enquanto durar a relação com o cliente. <br />
                        <br />
                        Os dados pessoais dos usuários apenas poderão ser conservados após o término de seu tratamento nas seguintes hipóteses:<br />
                        - para o cumprimento de obrigação legal ou regulatória pelo controlador;<br />
                        - para estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;<br />
                        - para a transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos na legislação;<br />
                        - para uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.<br />
                        </p>
                    <p className={`text-muted ${styles.textoPrivacidadeTitle}`}><b>4.5. Destinatários e transferência dos dados pessoais
                    </b></p>   
                        <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                        Os dados pessoais do usuário não serão compartilhadas com terceiros. Serão, portanto, tratados apenas por este aplicativo.                        
                        </p>
                </Container>
            </div>
        </ListGroup.Item>
      <ListGroup.Item as="li"
        className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
            <div className="ms-2 me-auto">
                <div><h5>Do tratamento dos dados pessoais</h5></div>
                <Container>
                <p className={`text-muted ${styles.textoPrivacidadeTitle}`}><b>5.1. Do responsável pelo tratamento dos dados (data controller)</b></p>   
                <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                O controlador, responsável pelo tratamento dos dados pessoais do usuário, é a pessoa física ou jurídica, a autoridade pública, a agência ou outro organismo que, individualmente ou em conjunto com outras, determina as finalidades e os meios de tratamento de dados pessoais. <br />
                <br />
Neste aplicativo, o responsável pelo tratamento dos dados pessoais coletados é HELLO Telecom Ltda, representada por Priscila Okoshi, que poderá ser contactado pelo e-mail: priscila.ribeiro@hellocelular.com.br ou no endereço:<br />
<br />
Avenida Regente Feijó, 944 - 11 andar lado A sala 1105/1106, CEP: 03342-000, São Paulo, SP, Brasil <br />
<br />
O responsável pelo tratamento dos dados se encarregará diretamente do tratamento dos dados pessoais do usuário.
                        </p>
                <p className={`text-muted ${styles.textoPrivacidadeTitle}`}><b>5.2. Do encarregado de proteção de dados (data protection officer)</b></p>   
                <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                O encarregado de proteção de dados (data protection officer) é o profissional encarregado de informar, aconselhar e controlar o responsável pelo tratamento dos dados, bem como os trabalhadores que tratem os dados, a respeito das obrigações do aplicativo nos termos do RGDP, da Lei de Proteção de Dados Pessoais e de outras disposições de proteção de dados presentes na legislação nacional e internacional, em cooperação com a autoridade de controle competente.<br />
                <br />
                Neste aplicativo o encarregado de proteção de dados (data protection officer) é Priscila Ribeiro, que poderá ser contactado pelo e-mail: priscila.ribeiro@hellocelular.com.br.
                        </p>
                </Container>
            </div>
        </ListGroup.Item>
        <ListGroup.Item as="li"
        className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
            <div className="ms-2 me-auto">
                <div><h5>Segurança no tratamento dos dados pessoais do usuário</h5></div>
                <Container>
                <p className={`text-muted ${styles.textoPrivacidade}`}>
                O aplicativo se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados. <br />
                <br />
                Para a garantia da segurança, serão adotadas soluções que levem em consideração: as técnicas adequadas; os custos de aplicação; a natureza, o âmbito, o contexto e as finalidades do tratamento; e os riscos para os direitos e liberdades do usuário.
                <br /><br />
                O aplicativo utiliza certificado SSL (Secure Socket Layer) que garante que os dados pessoais se transmitam de forma segura e confidencial, de maneira que a transmissão dos dados entre o servidor e o usuário, e em retroalimentação, ocorra de maneira totalmente cifrada ou encriptada.
                <br /><br />
                No entanto, o aplicativo se exime de responsabilidade por culpa exclusiva de terceiro, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário, como no caso em que ele mesmo transfere seus dados a terceiro. O aplicativo se compromete, ainda, a comunicar o usuário em prazo adequado caso ocorra algum tipo de violação da segurança de seus dados pessoais que possa lhe causar um alto risco para seus direitos e liberdades pessoais.
                <br /><br />
                A violação de dados pessoais é uma violação de segurança que provoque, de modo acidental ou ilícito, a destruição, a perda, a alteração, a divulgação ou o acesso não autorizados a dados pessoais transmitidos, conservados ou sujeitos a qualquer outro tipo de tratamento.
                <br /><br />
                Por fim, o aplicativo se compromete a tratar os dados pessoais do usuário com confidencialidade, dentro dos limites legais. </p>
                </Container>
            </div>
        </ListGroup.Item>
        <ListGroup.Item as="li"
        className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
            <div className="ms-2 me-auto">
                <div><h5>Dados de navegação (cookies)</h5></div>
                <Container>
                <p className={`text-muted ${styles.textoPrivacidade}`}>
                Cookies são pequenos arquivos de texto enviados pelo aplicativo ao computador do usuário e que nele ficam armazenados, com informações relacionadas à navegação do aplicativo.
                <br /><br />
                Por meio dos cookies, pequenas quantidades de informação são armazenadas pelo navegador do usuário para que nosso servidor possa lê-las posteriormente. Podem ser armazenados, por exemplo, dados sobre o dispositivo utilizado pelo usuário, bem como seu local e horário de acesso ao aplicativo.
                <br /><br />
                Os cookies não permitem que qualquer arquivo ou informação sejam extraídos do disco rígido do usuário, não sendo possível, ainda, que, por meio deles, se tenha acesso a informações pessoais que não tenham partido do usuário ou da forma como utiliza os recursos do aplicativo.
                <br /><br />
                É importante ressaltar que nem todo cookie contém informações que permitem a identificação do usuário, sendo que determinados tipos de cookies podem ser empregados simplesmente para que o aplicativo sejam carregado corretamente ou para que suas funcionalidades funcionem do modo esperado.
                <br /><br />
                As informações eventualmente armazenadas em cookies que permitam identificar um usuário são consideradas dados pessoais. Dessa forma, todas as regras previstas nesta Política de Privacidade também lhes são aplicáveis.
                </p>
                <p className={`text-muted ms-4 ${styles.textoPrivacidadeTitle}`}><b>7.1. Cookies do aplicativo
                </b></p>   
                <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                Os cookies do aplicativo são aqueles enviados ao computador ou dispositivo do usuário e administrador exclusivamente pelo aplicativo.
                <br /><br />
                As informações coletadas por meio destes cookies são utilizadas para melhorar e personalizar a experiência do usuário, sendo que alguns cookies podem, por exemplo, ser utilizados para lembrar as preferências e escolhas do usuário, bem como para o oferecimento de conteúdo personalizado.
                <br /><br />
                Estes dados de navegação poderão, ainda, ser compartilhados com eventuais parceiros do aplicativo, buscando o aprimoramento dos produtos e serviços ofertados ao usuário.
                </p>
                <p className={`text-muted ms-4 ${styles.textoPrivacidadeTitle}`}><b>7.2. Gestão dos cookies e configurações do navegador
                </b></p>   
                <p className={`text-muted ms-4 ${styles.textoPrivacidade}`}>
                O usuário poderá se opor ao registro de cookies pelo aplicativo, bastando que desative esta opção no seu próprio navegador ou aparelho.
                <br /><br />
                A desativação dos cookies, no entanto, pode afetar a disponibilidade de algumas ferramentas e funcionalidades do aplicativo, comprometendo seu correto e esperado funcionamento. Outra consequência possível é remoção das preferências do usuário que eventualmente tiverem sido salvas, prejudicando sua experiência.
                <br /><br />
                A seguir, são disponibilizados alguns links para as páginas de ajuda e suporte dos navegadores mais utilizados, que poderão ser acessadas pelo usuário interessado em obter mais informações sobre a gestão de cookies em seu navegador:
                <br /><br />
                Internet Explorer:<br />
                https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies
                <br /><br />
                Safari: <br />
                https://support.apple.com/pt-br/guide/safari/sfri11471/mac
                <br /><br />
                Google Chrome: <br />
                https://support.google.com/chrome/answer/95647?hl=pt-BR&hlrm=pt
                <br /><br />
                Mozila Firefox: <br />
                https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam
                <br /><br />
                Opera: <br />
                https://www.opera.com/help/tutorials/security/privacy/
                </p>
                </Container>
            </div>
        </ListGroup.Item>
        <ListGroup.Item as="li"
        className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
            <div className="ms-2 me-auto">
                <div><h5>Reclamação a uma autoridade de controle</h5></div>
                <Container>
                <p className={`text-muted ${styles.textoPrivacidade}`}>
                Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, todos os titulares de dados têm direito a apresentar reclamação a uma autoridade de controle. A reclamação poderá ser feita à autoridade da sede do aplicativo, do país de residência habitual do usuário, do seu local de trabalho ou do local onde foi alegadamente praticada a infração.
                </p>
                </Container>
            </div>
        </ListGroup.Item>
        <ListGroup.Item as="li"
        className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
            <div className="ms-2 me-auto">
                <div><h5>Das alterações</h5></div>
                <Container>
                <p className={`text-muted ${styles.textoPrivacidade}`}>
                A presente versão desta Política de Privacidade foi atualizada pela última vez em: 01/05/2020.
                <br /><br />
                O editor se reserva o direito de modificar, a qualquer momento o aplicativo as presentes normas, especialmente para adaptá-las às evoluções do aplicativo HELLO, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.
                <br /><br />
                O usuário será explicitamente notificado em caso de alteração desta política.
                <br /><br />
                Ao utilizar o serviço após eventuais modificações, o usuário demonstra sua concordância com as novas normas. Caso discorde de alguma das modificações, deverá pedir, imediatamente, o cancelamento de sua conta e apresentar a sua ressalva ao serviço de atendimento, se assim o desejar.                </p>
                </Container>
            </div>
        </ListGroup.Item>
        <ListGroup.Item as="li"
        className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
            <div className="ms-2 me-auto">
                <div><h5>Do Direito aplicável e do foro</h5></div>
                <Container>
                <p className={`text-muted ${styles.textoPrivacidade}`}>
                Para a solução das controvérsias decorrentes do presente instrumento, será aplicado integralmente o Direito brasileiro.
                <br /><br />
                Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede do editor do aplicativo.                </p>
                </Container>
            </div>
        </ListGroup.Item>
    </ListGroup>
            </Row>  
        </Container>
    );
}

export default TermosPrivacidade