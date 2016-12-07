;
;    Copyright (c) Dilvan A. Moreira 2016. All rights reserved.
;    This file is part of ePad.
;
;     ePad is free software: you can redistribute it and/or modify
;     it under the terms of the GNU General Public License as published by
;     the Free Software Foundation, either version 3 of the License.
;
;     ePad is distributed in the hope that it will be useful,
;     but WITHOUT ANY WARRANTY; without even the implied warranty of
;     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;     GNU General Public License for more details.
;
;     You should have received a copy of the GNU General Public License
;     along with ePad.  If not, see <http://www.gnu.org/licenses/>.
;

(ns roiEditor.macros
  (:require [infix.macros :refer [infix]]))

(defmacro $
  "Takes an infix expression, resolves an aliases before rewriting the
   infix expressions into standard LISP prefix expressions."
  [& expr]
  `(infix ~expr))


(defmacro «
  "Takes an infix expression, resolves an aliases before rewriting the
   infix expressions into standard LISP prefix expressions."
  [& expr]
  `(infix ~expr))

(defmacro →
  "Threads the expr through the forms. Inserts x as the
  second item in the first form, making a list of it if it is not a
  list already. If there are more forms, inserts the first form as the
  second item in second form, etc."
  {:added "1.0"}
  [x & forms]
  (loop [x x, forms forms]
    (if forms
      (let [form (first forms)
            threaded (if (seq? form)
                       (with-meta `(~(first form) ~x ~@(next form)) (meta form))
                       (list form x))]
        (recur threaded (next forms)))
      x)))

(defmacro ≠ [x y]
  `(not= ~x ~y))

(defmacro when-let*
  "bindings => binding-forms test

  When test is true, evaluates body with binding-forms bound to the value of test"
  ([bindings & body]
   (if (seq bindings)
     `(when-let [~(first bindings) ~(second bindings)]
        (when-let* ~(drop 2 bindings) ~@body))
     `(do ~@body))))