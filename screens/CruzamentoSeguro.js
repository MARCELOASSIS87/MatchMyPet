import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed';  // Importando checkbox

const CruzamentoSeguro = () => {
  const [certificado, setCertificado] = useState(false);
  const [doencasHereditarias, setDoencasHereditarias] = useState(false);
  const [pedigree, setPedigree] = useState(false);
  const [arvoreGenealogica, setArvoreGenealogica] = useState(false);
  const [fotos, setFotos] = useState(false);
  const [videos, setVideos] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Certificado Veterinário */}
      <Text style={styles.sectionTitle}>Certificado Veterinário:</Text>
      <CheckBox
        title="Anexar Certificado"
        checked={certificado}
        onPress={() => setCertificado(!certificado)}
      />

      {/* Doenças Hereditárias */}
      <Text style={styles.sectionTitle}>Doenças Hereditárias:</Text>
      <CheckBox
        title="Não possui"
        checked={!doencasHereditarias}
        onPress={() => setDoencasHereditarias(false)}
      />
      <CheckBox
        title="Possui (especificar)"
        checked={doencasHereditarias}
        onPress={() => setDoencasHereditarias(true)}
      />

      {/* Pedigree */}
      <Text style={styles.sectionTitle}>Pedigree</Text>
      <CheckBox
        title="Pedigree Registrado: Sim"
        checked={pedigree}
        onPress={() => setPedigree(!pedigree)}
      />
      <CheckBox
        title="Pedigree Registrado: Não"
        checked={!pedigree}
        onPress={() => setPedigree(false)}
      />

      {/* Árvore Genealógica */}
      <Text style={styles.sectionTitle}>Árvore Genealógica Disponível:</Text>
      <CheckBox
        title="Sim (anexar documentação)"
        checked={arvoreGenealogica}
        onPress={() => setArvoreGenealogica(true)}
      />
      <CheckBox
        title="Não"
        checked={!arvoreGenealogica}
        onPress={() => setArvoreGenealogica(false)}
      />

      {/* Nota */}
      <Text style={styles.note}>
        Nota: O app verificará automaticamente a árvore genealógica para evitar cruzamentos entre pets com parentesco próximo.
      </Text>

      {/* Seção de Fotos e Vídeos */}
      <Text style={styles.sectionTitle}>Fotos e Vídeos</Text>

      {/* Adicionar Fotos */}
      <CheckBox
        title="Adicionar Fotos: Upload de imagens"
        checked={fotos}
        onPress={() => setFotos(!fotos)}
      />

      {/* Adicionar Vídeos */}
      <CheckBox
        title="Adicionar Vídeos: Upload de vídeos"
        checked={videos}
        onPress={() => setVideos(!videos)}
      />
    </ScrollView>
  );
};

export default CruzamentoSeguro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  note: {
    fontSize: 12,
    color: '#333',
    marginTop: 20,
  },
});
