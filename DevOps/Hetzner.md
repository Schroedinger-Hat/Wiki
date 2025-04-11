## Configurazione VPS

La macchina dispone di due account principali: `root`e `sh`.

Il primo deve essere usato solo in casi di estrema necessità. Mentre, il secondo è l'account ufficiale sul quale accedere e gestire il server. Entrambi gli account sono sudoers.

Per accedere agli account sono state create due chiavi SSH con i quali accedere senza uso di una password.

Su account sh al momento è stata avviata un'istanza di K3s, un Kubernetes lightweight di solito usato su server monoistanza o macchine piccole. Il procedimento è stato eseguito tramite il progetto [K3sup](https://github.com/alexellis/k3sup) che permette una configurazione e veloce.

## Kubernetes

### Flux

Per gestire i rilasci e gli aggiornamenti delle applicazioni all'interno del cluster si è deciso di adottare un approccio GitOps mediante l'utilizzo di Flux, un tool appartenente al landscape CNCF per la gestione GitOps di cluster Kubernetes.

È stato quindi creato un repository GitHub privato (<https://github.com/Schroedinger-Hat/sh-cluster-fleet>) nel quale bisognerà andare a inserire le dichiarazioni delle applicazioni e servizi.

Si rimanda al README.md presente nella pagina del repository per ogni considerazione.
