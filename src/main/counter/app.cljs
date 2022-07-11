(ns counter.app
  (:require [reagent.core :as r])
  (:require [reagent.dom :as dom]))

(defonce current-count (r/atom 0))

(println "Code reloaded!")

(defn init []
  (println "App initialization!"))

(defn Application []
  [:div
   [:h1 "Counter"]
   @current-count " "[:button
                      {:onClick (fn [] (swap! current-count inc))} "+1"]
   [:button {:onClick (fn [] (swap! current-count dec))} "-1"]])

(dom/render [Application] (js/document.getElementById "app"))
