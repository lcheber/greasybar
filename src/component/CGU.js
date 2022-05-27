import React, { useState, useEffect } from 'react'
import axios from "axios";
import Typography from '@mui/material/Typography';


export default function CGU() {
    return (
        <div style={{ marginTop: "100px", marginBottom: "100px" }}>
            <Typography variant="h5" component="div" sx={{ marginTop: '-30px' }}>
                Comment rédiger ses CGU ?
                Les conditions générales d’utilisation doivent être rédigées dans le respect des dispositions légales applicables : en aucun cas une clause ne peut déroger aux dispositions d’ordre public. Au-delà de cet impératif, l’éditeur du site peut prévoir toute mention utile pour informer l’internaute sur le contenu du site d’une part, se protéger contre d’éventuels litiges avec l’utilisateur d’autre part.

                Le contenu des CGU inclut notamment :

                La description du site : les conditions générales d’utilisation peuvent préciser l’objectif du site et décrire les services proposés. Attention à prévoir une description large, pour s’éviter d’avoir à modifier les CGU à chaque évolution du site.
                Les droits et les obligations de l’utilisateur : les droits de l’utilisateur peuvent concerner notamment sa marge de manœuvre au moment de la création d’un espace personnel. Ses obligations peuvent inclure l’obligation de maintenir le caractère confidentiel de ses identifiants de connexion, l’obligation d’utiliser le site conformément à sa destination, l’obligation de ne pas tenter de nuire au bon fonctionnement du site… Ces dispositions des conditions générales d’utilisation permettent d’engager sa responsabilité en cas de dommage résultant du non-respect desdites obligations.
                Les droits et les obligations de l’éditeur : les conditions générales d’utilisation mettent en général des obligations de moyens à la charge de l’éditeur. Maintenir l’accès au site, assurer le bon fonctionnement du site… Les CGU sont aussi l’occasion pour l’éditeur de se décharger de sa responsabilité en cas d’utilisation frauduleuse du site par un tiers, par exemple.
                Les conditions d’utilisation du forum ou d’un espace de libre échange : lorsque l’utilisateur est autorisé à publier lui-même du contenu sur le site, les conditions générales d’utilisation du site encadrent cet espace de libre échange. L’éditeur, notamment, peut limiter sa responsabilité de manière à ne pas être tenu responsable en cas de propos injurieux ou de publication de contenu contrefaisant les droits de propriété intellectuelle d’un tiers.
                La responsabilité limitée de l’éditeur quant aux liens hypertextes : des liens de redirection du site peuvent pointer vers des sites tiers. Les conditions générales d’utilisation précisent le lien juridique entre le site et le site tiers, et permettent de décharger l’éditeur de sa responsabilité en cas de contenu illicite sur le site tiers vers lequel le lien hypertexte redirige.
                Un rappel du droit de la propriété intellectuelle : les conditions générales d’utilisation rappellent aux internautes que les éléments du site – textes, vidéos, images… – sont protégés par le droit d’auteur et que leur utilisation sans autorisation préalable expresse est interdite.
                Un rappel sur la force majeure : la force majeure, un évènement extérieur imprévisible et insurmontable, exonère les parties de leurs responsabilités respectives. Cette disposition est d’ordre public.
                Les modalités de règlement des litiges : l’éditeur peut mentionner qu’en cas de litige, les parties tenteront de régler le conflit à l’amiable. A défaut de règlement amiable, l’éditeur doit respecter les règles d’attribution de compétence matérielle et territoriale. Par exemple : le consommateur doit avoir le choix entre le tribunal de son domicile ou le tribunal du lieu de la société éditrice du site.
            </Typography>
        </div>
    )
}